// cli/commands/generate.command.ts
export function generateCommand(program) {
  program
    .command('generate <type> <name>')
    .alias('g')
    .description('Gera código baseado em templates')
    .action((type, name) => {
      console.log(`✨ Gerando ${type}: ${name}`)
    })
}
  