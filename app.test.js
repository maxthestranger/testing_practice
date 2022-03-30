const {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
} = require('./app');

test('returns the length of myself to 6', () => {
  expect(stringLength('myself')).toBe(6);
});

test('throw TypeError for str.len < 1', () => {
  expect(() => {
    stringLength('');
  }).toThrow(TypeError);
});

test('throw TypeError for str.len > 10', () => {
  expect(() => {
    stringLength('this is longer than ten');
  }).toThrow(TypeError);
});

test('tests returns stset', () => {
  expect(reverseString('tests')).toBe('stset');
});

// calc test
describe('calculator', () => {
  test('add 4 + 4 = 8', () => {
    expect(new Calculator(4, 4).add()).toBe(8);
  });

  test('subtract 4 - 4 = 0', () => {
    expect(new Calculator(4, 4).subtract()).toBe(0);
  });

  test('divide 4 / 4 = 1', () => {
    expect(new Calculator(4, 4).divide()).toBe(1);
  });

  test('multiply 4 * 4 = 16', () => {
    expect(new Calculator(4, 4).multiply()).toBe(16);
  });
});

// capitalize
describe('capitalize', () => {
  test('throw TypeError str empty', () => {
    expect(() => {
      capitalize('');
    }).toThrow(TypeError);
  });

  test('dog returns Dog', () => {
    expect(capitalize('dog')).toBe('Dog');
  });

  test('this is cool returns This Is Cool', () => {
    expect(capitalize('this is cool')).toBe('This Is Cool');
  });
});
