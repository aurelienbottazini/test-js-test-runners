const sum2436 = require('../sum2436.js');

test('adds 40 + 96 to equal 136 + offset 0.383061169202791', () => {
  expect(sum2436(40, 96)).toBe(136 + 0.383061169202791);
});