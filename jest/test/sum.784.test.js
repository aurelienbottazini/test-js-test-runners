const sum784 = require('../sum784.js');

test('adds 69 + 27 to equal 96 + 0.587686107771167', () => {
  expect(sum784(69, 27)).toBe(96 + 0.587686107771167);
});