const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let maxDepth = 1;
      for (let el of arr) {
        let depth = 1;
        depth += this.calculateDepth(el);
        if (maxDepth < depth) {
          maxDepth = depth;
        }
      }
      return maxDepth;
    } else {
      return 0;
    }
  }
};