function stringLength(str) {
  if (str.length > 1 && str.length <= 10) {
    return str.length;
  } else {
    throw new TypeError('String is empty or longer than 10');
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }
}

function capitalize(str) {
  if (str.length) {
    return str
      .split(' ')
      .map((s) => s[0].toUpperCase() + s.substr(1))
      .join(' ');
  }

  throw new TypeError('str cannot be empty');
}

module.exports = { stringLength, reverseString, Calculator, capitalize };
