const sum727 = require('../sum727.js');

test('adds 56 + 87 to equal 143 + offset 0.2002468691747905', () => {
  expect(sum727(56, 87)).toBe(143 + 0.2002468691747905);
});