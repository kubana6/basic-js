const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity='') {

  const COEF = Math.log(2)/ HALF_LIFE_PERIOD
  if((+sampleActivity)>0&&(+sampleActivity)<0){ 
    return Math.log(MODERN_ACTIVITY/sampleActivity)/COEF
  }
  return false 
  
};
