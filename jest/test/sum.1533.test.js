const sum1533 = require('../sum1533.js');

test('adds 50 + 74 to equal 124 + 0.037940170479131896', () => {
  expect(sum1533(50, 74)).toBe(124 + 0.037940170479131896);
});