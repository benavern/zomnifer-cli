const clean = require('./lib/clean')
const inquirer = require('./lib/inquirer')

module.exports = async os => {
  clean({stage: 'home'})
  const choice = await inquirer.chooseAction()

  // TODO: the actual app code...

  clean({stage: 'end'})
  console.log(choice)
}
