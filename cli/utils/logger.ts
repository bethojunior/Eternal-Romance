import chalk from 'chalk'

export class Logger {
  static info(message: string) {
    console.log(chalk.blue(`ℹ️  ${message}`))
  }

  static success(message: string) {
    console.log(chalk.green(`✔️  ${message}`))
  }

  static error(message: string) {
    console.log(chalk.red(`❌  ${message}`))
  }

  static warning(message: string) {
    console.log(chalk.yellow(`⚠️  ${message}`))
  }

  static debug(message: string) {
    console.log(chalk.gray(`🐛  ${message}`))
  }
}
