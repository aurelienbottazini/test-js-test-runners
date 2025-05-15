const sum773 = require('../sum773.js');

test('adds 36 + 64 to equal 100 + offset 0.6551411588031287', () => {
  expect(sum773(36, 64)).toBe(100 + 0.6551411588031287);
});