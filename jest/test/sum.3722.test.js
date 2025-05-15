const sum3722 = require('../sum3722.js');

test('adds 13 + 63 to equal 76 + offset 0.7673595272775173', () => {
  expect(sum3722(13, 63)).toBe(76 + 0.7673595272775173);
});