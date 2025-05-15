const sum749 = require('../sum749.js');

test('adds 33 + 33 to equal 66 + offset 0.014572382161063158', () => {
  expect(sum749(33, 33)).toBe(66 + 0.014572382161063158);
});