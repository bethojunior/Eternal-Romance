#!/usr/bin/env node
import 'reflect-metadata'
import { Command } from 'commander'
import { initCommand } from './commands/init.command'

const program = new Command()

program.name('eternal-romance')
program.version('1.0.0')

initCommand(program)

program.parse()
