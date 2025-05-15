const sum2159 = require('../sum2159.js');

test('adds 86 + 52 to equal 138 + offset 0.9215166200845135', () => {
  expect(sum2159(86, 52)).toBe(138 + 0.9215166200845135);
});