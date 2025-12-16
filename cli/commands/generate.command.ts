// cli/commands/generate.command.ts
export function generateCommand(program: any) {
  program
    .command('generate <type> <name>')
    .alias('g')
    .description('Gera código baseado em templates')
    .action((type: any, name: any) => {
      console.log(`✨ Gerando ${type}: ${name}`)
    })
}
