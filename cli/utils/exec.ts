import { spawn } from 'node:child_process'
import { Logger } from './logger'

type ExecOptions = {
  cwd?: string
  env?: NodeJS.ProcessEnv
  silent?: boolean
}

export function exec(
  command: string,
  args: string[] = [],
  options: ExecOptions = {}
): Promise<void> {
  return new Promise((resolve, reject) => {
    Logger.info(`Executando: ${command} ${args.join(' ')}`)

    const child = spawn(command, args, {
      stdio: options.silent ? 'ignore' : 'inherit',
      cwd: options.cwd,
      env: {
        ...process.env,
        ...options.env
      },
      shell: true
    })

    child.on('close', (code) => {
      if (code !== 0) {
        Logger.error(`Comando falhou: ${command} ${args.join(' ')}`)
        reject(new Error(`❌ Command failed: ${command} ${args.join(' ')}`))
      } else {
        Logger.success(`Comando concluído: ${command} ${args.join(' ')}`)
        resolve()
      }
    })
  })
}
