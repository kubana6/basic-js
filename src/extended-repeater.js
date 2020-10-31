const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
    let repeatString =""
    if(!options.repeatTimes && !options.additionRepeatTimes) {
      return str + options.addition
    }
    for (let i = 0; i < options.repeatTimes; i +=1) {
      repeatString += str
      let a = 0
      while(a < options.additionRepeatTimes ) {
        repeatString += options.addition
        if(a+1 != options.additionRepeatTimes) {
          repeatString += options.additionSeparator ||"|"
        }
        a +=1
      }
      if(i+1 != options.repeatTimes) {
        repeatString += options.separator || "+"
      }
    }
   return repeatString
};
