const sum1140 = require('../sum1140.js');

test('adds 62 + 75 to equal 137 + offset 0.2641346618434244', () => {
  expect(sum1140(62, 75)).toBe(137 + 0.2641346618434244);
});