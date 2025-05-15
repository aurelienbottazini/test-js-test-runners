const sum3498 = require('../sum3498.js');

test('adds 6 + 42 to equal 48 + offset 0.1504836735665449', () => {
  expect(sum3498(6, 42)).toBe(48 + 0.1504836735665449);
});