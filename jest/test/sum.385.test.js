const sum385 = require('../sum385.js');

test('adds 31 + 67 to equal 98 + offset 0.36802812107078786', () => {
  expect(sum385(31, 67)).toBe(98 + 0.36802812107078786);
});