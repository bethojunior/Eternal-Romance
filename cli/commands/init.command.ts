import fs from 'fs-extra'
import path from 'path'
import { exec } from '../utils/exec'
import { generateFromTemplate } from '../utils/generator'
import { Logger } from '../utils/logger'

export async function initCommand(program: any) {
  program
    .command('init <name>')
    .description('Create a new Eternal Romance project')
    .action(async (name: string) => {
      const projectPath = path.join(process.cwd(), name)
      const moduleName = 'user'

      if (fs.existsSync(projectPath)) {
        Logger.error(`❌ Directory "${name}" already exists`)
        return
      }

      try {
        Logger.info(`💖 Creating Eternal Romance project: ${name}`)

        // 1️⃣ Copy base project
        Logger.info('Copying base structure...')
        await fs.copy(path.join(__dirname, '../../templates/project'), projectPath)

        // 2️⃣ Generate module respecting your architecture
        Logger.info('Generating base module...')

        const templatesDir = path.join(__dirname, '../../templates/module')

        await generateFromTemplate(
          path.join(templatesDir, 'controller.ts.tpl'),
          path.join(projectPath, 'domain/user/user.controller.ts'),
          {}
        )

        await generateFromTemplate(
          path.join(templatesDir, 'service.ts.tpl'),
          path.join(projectPath, 'core/user/user.service.ts'),
          {}
        )

        await generateFromTemplate(
          path.join(templatesDir, 'repository.ts.tpl'),
          path.join(projectPath, 'core/user/user.repository.ts'),
          {}
        )

        // 3️⃣ Install deps
        Logger.info('Installing dependencies...')
        await exec('yarn', ['install'], { cwd: projectPath })

        Logger.success(`🔥 Project "${name}" created successfully`)
      } catch (error: any) {
        Logger.error(`Failed to create project: ${error.message}`)
      }
    })
}
