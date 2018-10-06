const { prompt } = require('inquirer')

module.exports = () => {
  const questions = [
    {
      type: 'confirm',
      name: 'again',
      message: 'Do you want to do something else now ?'
    }
  ]

  return prompt(questions)
}
