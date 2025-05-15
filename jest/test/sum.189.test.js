const sum189 = require('../sum189.js');

test('adds 44 + 44 to equal 88 + 0.5352942399597437', () => {
  expect(sum189(44, 44)).toBe(88 + 0.5352942399597437);
});