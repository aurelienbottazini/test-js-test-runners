const sum2096 = require('../sum2096.js');

test('adds 50 + 37 to equal 87 + offset 0.7183958779737657', () => {
  expect(sum2096(50, 37)).toBe(87 + 0.7183958779737657);
});