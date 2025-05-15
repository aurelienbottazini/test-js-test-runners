const sum4678 = require('../sum4678.js');

test('adds 32 + 15 to equal 47 + offset 0.24277237312185196', () => {
  expect(sum4678(32, 15)).toBe(47 + 0.24277237312185196);
});