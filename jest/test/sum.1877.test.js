const sum1877 = require('../sum1877.js');

test('adds 66 + 27 to equal 93 + 0.8304010919554894', () => {
  expect(sum1877(66, 27)).toBe(93 + 0.8304010919554894);
});