const sum2980 = require('../sum2980.js');

test('adds 75 + 37 to equal 112 + offset 0.5309326762163542', () => {
  expect(sum2980(75, 37)).toBe(112 + 0.5309326762163542);
});