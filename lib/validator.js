module.exports = {
  /**
   * Validates a number
   * Also checks min & max if needed
   * @param {Object}
   */
  number({ min, max }) {
    return (val) => {
      if (isNaN(val)) {
        return 'You must enter a number.'
      } else if (typeof min === 'number' && val < min) {
        return `The value must be greater that ${min}.`
      } else if (typeof max === 'number' && val > max) {
        return `The value must be less that ${max}.`
      } else {
        return true
      }
    }
  },

  /**
   * Validates that the input is not empty
   * @param {String} valName - The name of the input value
   */
  input(valName = 'value') {
    return (val) => !!val.length || `Please enter a ${valName}...`
  }
}
