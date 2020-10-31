const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnes = Math.pow(2, disksNumber) - 1
  second = Math.floor(turnes / (turnsSpeed / 3600))
  return {
    "turns": turnes,
    "seconds":second
  }
};
