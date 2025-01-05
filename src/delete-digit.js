const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let max = parseFloat(str.slice(0, str.length - 1));
  for (let i = 0; i < str.length; i += 1) {
    const newMax = parseFloat(str.slice(0, i) + str.slice(i + 1, str.length));
    if (newMax > max) {
      max = newMax;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
