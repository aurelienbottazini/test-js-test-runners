const sum530 = require('../sum530.js');

test('adds 42 + 44 to equal 86 + 0.67729910477175', () => {
  expect(sum530(42, 44)).toBe(86 + 0.67729910477175);
});