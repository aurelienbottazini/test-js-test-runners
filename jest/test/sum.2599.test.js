const sum2599 = require('../sum2599.js');

test('adds 1 + 69 to equal 70 + 0.7510908183337505', () => {
  expect(sum2599(1, 69)).toBe(70 + 0.7510908183337505);
});