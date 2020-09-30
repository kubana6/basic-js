const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix)  {
  // remove line with error and write your code here
   return matrix.join(',').split(',').reduce((acc,rec) => {
      return rec === '^^' ? acc + 1 : acc
   },0)
};
