const sum4816 = require('../sum4816.js');

test('adds 31 + 58 to equal 89 + 0.12229309673032585', () => {
  expect(sum4816(31, 58)).toBe(89 + 0.12229309673032585);
});