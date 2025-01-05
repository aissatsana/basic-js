const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *abbcca
 */
function encodeLine(str) {
  let res = "";
  let amount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      amount++;
    } else {
      res += `${amount > 1 ? amount : ""}${str[i - 1]}`;
      amount = 1;
    }

    if (i === str.length - 1) {
      res += `${amount > 1 ? amount : ""}${str[i]}`;
    }
  }

  return res;
}

module.exports = {
  encodeLine,
};
