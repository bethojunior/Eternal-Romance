import fs from 'fs-extra'
import path from 'path'

export async function generateFromTemplate(
  templatePath: string,
  targetPath: string,
  replacements: Record<string, string>
) {
  let content = await fs.readFile(templatePath, 'utf-8')

  for (const key in replacements) {
    content = content.replace(new RegExp(`{{${key}}}`, 'g'), replacements[key])
  }

  await fs.ensureDir(path.dirname(targetPath))
  await fs.writeFile(targetPath, content)
}
