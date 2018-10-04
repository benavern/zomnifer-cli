const clean = require('./lib/clean')
const inquirer = require('./lib/inquirer')
const actions = require('./lib/actions')

module.exports = async os => {
  clean('Action')
  const { action } = await inquirer.chooseAction()

  clean(action)
  actions[action].run()
}
