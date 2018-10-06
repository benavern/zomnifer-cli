const clean = require('./lib/clean')
const chooseAction = require('./lib/chooseAction')
const actions = require('./lib/actions')
const runAgain = require('./lib/runAgain')

module.exports = async os => {
  clean('Action', true)
  const { action } = await chooseAction()

  clean(action)
  await actions[action].run()

  clean('Again ?', true)
  const { again } = await runAgain()
  return again
}
