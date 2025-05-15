const sum1130 = require('../sum1130.js');

test('adds 89 + 15 to equal 104 + 0.5106764893172426', () => {
  expect(sum1130(89, 15)).toBe(104 + 0.5106764893172426);
});