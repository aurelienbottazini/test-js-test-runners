const sum2667 = require('../sum2667.js');

test('adds 85 + 20 to equal 105 + offset 0.8738153237928384', () => {
  expect(sum2667(85, 20)).toBe(105 + 0.8738153237928384);
});