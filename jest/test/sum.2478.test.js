const sum2478 = require('../sum2478.js');

test('adds 2 + 83 to equal 85 + offset 0.7853658316870992', () => {
  expect(sum2478(2, 83)).toBe(85 + 0.7853658316870992);
});