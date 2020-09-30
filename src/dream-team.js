const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members = []) {
  if (Array.isArray(members)) {
    if (members.length > 0) {
      return members.reduce((acc, rec) => {
        if (typeof rec === 'string') {
          if (rec[0] != ' ') {
            return [...acc, rec[0].toUpperCase()]
          } else {
            return [...acc, rec.split('').filter(it => it!=' ' )[0].toUpperCase()]
          }
        }
        return acc
      }, []).sort().join('')
    }
    return false 

  }
  return false

};
