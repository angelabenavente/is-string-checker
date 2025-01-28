/**
 * Checks if a value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

// Export the function for use in other modules
module.exports = isString;
