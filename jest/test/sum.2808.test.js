const sum2808 = require('../sum2808.js');

test('adds 21 + 20 to equal 41 + 0.23836734873682208', () => {
  expect(sum2808(21, 20)).toBe(41 + 0.23836734873682208);
});