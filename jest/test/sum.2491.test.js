const sum2491 = require('../sum2491.js');

test('adds 74 + 95 to equal 169 + 0.001075304039474534', () => {
  expect(sum2491(74, 95)).toBe(169 + 0.001075304039474534);
});