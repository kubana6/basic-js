const CustomError = require("../extensions/custom-error");
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {

  constructor(direct) {
    if (direct === false) {
      this.direct = false;
    } else {
      this.direct = true;
    }
  }

  encrypt(string, key) {
    if (typeof string === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    } else {
      string = string.toUpperCase();
      key = key.toUpperCase();
      while (key.length < string.length) {
        key += key;
      }
      let result = '';
      for (let i = 0, j = 0; i < string.length; i++, j++) {
        if (alphabet.includes(string.charAt(i))) {
          result += alphabet.charAt((alphabet.indexOf(string.charAt(i)) + alphabet.indexOf(key.charAt(j))) % alphabet.length);
        } else {
          result += string.charAt(i);
          j--;
        }
      }
      if (this.direct === false) {
        result = result.split('').reverse().join('');
      }
      return result;
    }
  }

  decrypt(string, key) {
    if (typeof string === 'undefined' || typeof key === 'undefined') {
      throw new Error();
    } else {
      string = string.toUpperCase();
      key = key.toUpperCase();
      while (key.length < string.length) {
        key += key;
      }
      let result = '';
      for (let i = 0, j = 0; i < string.length; i++, j++) {
        if (alphabet.includes(string.charAt(i))) {
          result += alphabet.charAt((alphabet.indexOf(string.charAt(i)) - alphabet.indexOf(key.charAt(j)) + alphabet.length) % alphabet.length);
        } else {
          result += string.charAt(i);
          j--;
        }
      }
      if (this.direct === false) {
        result = result.split('').reverse().join('');
      }
      return result;
    }
  }
}

module.exports = VigenereCipheringMachine;
