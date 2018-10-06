const { prompt } = require('inquirer')
const notifier = require('node-notifier')
const path = require('path')
const validator = require('../validator')

module.exports = {
  async run () {
    const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Title :',
        validate: validator.input('title')
      },
      {
        type: 'input',
        name: 'message',
        message: 'Message :',
        validate: validator.input('message')
      },
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

    const { title, message, delay } = await prompt(questions)

    await new Promise(resolve => setTimeout(resolve, delay * 60 * 1000))

    notifier.notify({
      title,
      message,
      icon: path.join(__dirname, '../../icons/mipmap-hdpi/ic_launcher.png')
    })
  }
}
