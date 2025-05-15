const sum1780 = require('../sum1780.js');

test('adds 54 + 5 to equal 59 + offset 0.8061371203133595', () => {
  expect(sum1780(54, 5)).toBe(59 + 0.8061371203133595);
});