const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { separator = "+", addition = "", additionSeparator = "|", additionRepeatTimes = 1, repeatTimes = 1 } = options;
  let addStr = String(str);
  let res = "";
  for (let i = 0; i < additionRepeatTimes; i++) {
    addStr += addition;
    if (i !== additionRepeatTimes - 1 && additionSeparator) {
      addStr += additionSeparator;
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    res += addStr;
    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }
  return res;
}

module.exports = {
  repeater,
};
