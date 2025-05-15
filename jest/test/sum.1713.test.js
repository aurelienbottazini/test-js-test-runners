const sum1713 = require('../sum1713.js');

test('adds 86 + 11 to equal 97 + offset 0.36933989750168483', () => {
  expect(sum1713(86, 11)).toBe(97 + 0.36933989750168483);
});