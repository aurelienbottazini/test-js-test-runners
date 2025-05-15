const sum4667 = require('../sum4667.js');

test('adds 8 + 6 to equal 14 + offset 0.3728254254258534', () => {
  expect(sum4667(8, 6)).toBe(14 + 0.3728254254258534);
});