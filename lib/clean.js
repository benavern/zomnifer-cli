const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const breadcrumb = []

module.exports = ({text = 'Zomnifer', stage}) => {
  clear()

  console.log(chalk.green(
    figlet.textSync(text, {
      font: 'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  ))

  if(stage) breadcrumb.push(stage)

  if (breadcrumb.length) {
    const b = breadcrumb
      .map(level => chalk.blue(level))
      .join(chalk.yellow(' > '))

    console.log(chalk.yellow(' > ') + b + '\n')
  }
}
