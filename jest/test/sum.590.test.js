const sum590 = require('../sum590.js');

test('adds 63 + 44 to equal 107 + offset 0.8601412838621683', () => {
  expect(sum590(63, 44)).toBe(107 + 0.8601412838621683);
});