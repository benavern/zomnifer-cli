const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

let stepsList = ['']

module.exports = (step, reset = false) => {
  if (reset) {
    stepsList = ['']
  }

  clear()

  console.log(chalk.green(
    figlet.textSync('Zomnifer', {
      font: 'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  ))

  if(step) stepsList.push(step)

  const separator = chalk.yellow(' > ')
  const breadcrumb = stepsList
    .map(level => chalk.green(level))
    .join(separator)

  console.log(breadcrumb + '\n')
}
