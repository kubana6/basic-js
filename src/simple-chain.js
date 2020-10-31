const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && this.chain.length >= position && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
