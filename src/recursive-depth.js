const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    const depth = 1;
    let maxDepth = 0;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(el));
      }
    });
    return depth + maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
