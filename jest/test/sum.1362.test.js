const sum1362 = require('../sum1362.js');

test('adds 97 + 44 to equal 141 + offset 0.19474586494417157', () => {
  expect(sum1362(97, 44)).toBe(141 + 0.19474586494417157);
});