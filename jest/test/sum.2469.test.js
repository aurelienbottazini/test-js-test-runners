const sum2469 = require('../sum2469.js');

test('adds 49 + 49 to equal 98 + 0.07032275987653536', () => {
  expect(sum2469(49, 49)).toBe(98 + 0.07032275987653536);
});