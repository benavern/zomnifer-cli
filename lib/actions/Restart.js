const { prompt } = require('inquirer')
const commands = require('../commands')
const validator = require('../validator')

module.exports = {
  async run (os) {
    const questions = [
      {
        type: 'input',
        name: 'delay',
        message: 'Delay (min) :',
        default: 0,
        filter: val => parseInt(val, 10),
        validate: validator.number({
          min: 0,
          max: 60 * 3, // 3hours
        })
      }
    ]

    const { delay } = await prompt(questions)

    await new Promise(resolve => setTimeout(resolve, delay * 60 * 1000))

    commands(os, 'restart')
  }
}
