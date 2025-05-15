const sum4633 = require('../sum4633.js');

test('adds 14 + 42 to equal 56 + offset 0.5663274347126287', () => {
  expect(sum4633(14, 42)).toBe(56 + 0.5663274347126287);
});