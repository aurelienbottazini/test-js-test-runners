const sum2560 = require('../sum2560.js');

test('adds 16 + 10 to equal 26 + offset 0.5821519672167608', () => {
  expect(sum2560(16, 10)).toBe(26 + 0.5821519672167608);
});