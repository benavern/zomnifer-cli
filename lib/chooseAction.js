const { prompt } = require('inquirer')

module.exports = () => {
  const questions = [{
    type: 'list',
    name: 'action',
    message: 'What do you want to do ?',
    choices: [ 'Shutdown', 'Sleep', 'Notify']
  }]

  return prompt(questions)
}