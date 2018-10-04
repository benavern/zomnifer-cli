const clean = require('./lib/clean')
const chooseAction = require('./lib/chooseAction')
const actions = require('./lib/actions')

module.exports = async os => {
  clean('Action')
  const { action } = await chooseAction()

  clean(action)
  actions[action].run()
}
