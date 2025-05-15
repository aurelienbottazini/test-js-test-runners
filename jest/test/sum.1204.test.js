const sum1204 = require('../sum1204.js');

test('adds 34 + 21 to equal 55 + offset 0.38331616527527146', () => {
  expect(sum1204(34, 21)).toBe(55 + 0.38331616527527146);
});