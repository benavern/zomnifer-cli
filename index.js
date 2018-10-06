#! /usr/bin/env node
const chalk = require('chalk')
const zomnifer = require('./zomnifer')

const os = process.platform
const compatibleOss = ['linux']

const run = async system => {
  const again = await zomnifer(system)

  if (again) await run(system)
}

if (!compatibleOss.includes(os)) {
  console.error(chalk.red(`Your operating system ${os} is not compatible with this tool yet.`))
  process.exit(1)
} else {
  run(os)
}
