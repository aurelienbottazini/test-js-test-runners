const sum2111 = require('../sum2111.js');

test('adds 16 + 48 to equal 64 + offset 0.24439065660424142', () => {
  expect(sum2111(16, 48)).toBe(64 + 0.24439065660424142);
});