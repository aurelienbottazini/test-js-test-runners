const sum2499 = require('../sum2499.js');

test('adds 16 + 43 to equal 59 + 0.5088296856744774', () => {
  expect(sum2499(16, 43)).toBe(59 + 0.5088296856744774);
});