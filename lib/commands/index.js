const exec = require('child_process').exec

module.exports = (os, command) => {
  exec(require('./' + os)[command])
}
