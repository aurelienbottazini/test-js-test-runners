const sum2071 = require('../sum2071.js');

test('adds 55 + 72 to equal 127 + offset 0.853770724675819', () => {
  expect(sum2071(55, 72)).toBe(127 + 0.853770724675819);
});