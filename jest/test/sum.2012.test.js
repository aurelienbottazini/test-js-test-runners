const sum2012 = require('../sum2012.js');

test('adds 7 + 35 to equal 42 + offset 0.5111647595688664', () => {
  expect(sum2012(7, 35)).toBe(42 + 0.5111647595688664);
});