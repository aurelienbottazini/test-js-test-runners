const sum4129 = require('../sum4129.js');

test('adds 26 + 1 to equal 27 + 0.26475739654037156', () => {
  expect(sum4129(26, 1)).toBe(27 + 0.26475739654037156);
});