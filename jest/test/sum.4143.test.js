const sum4143 = require('../sum4143.js');

test('adds 25 + 61 to equal 86 + offset 0.3668592577503845', () => {
  expect(sum4143(25, 61)).toBe(86 + 0.3668592577503845);
});