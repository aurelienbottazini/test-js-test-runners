const sum28 = require('../sum28.js');

test('adds 8 + 70 to equal 78 + offset 0.9305662269026389', () => {
  expect(sum28(8, 70)).toBe(78 + 0.9305662269026389);
});