const sum2393 = require('../sum2393.js');

test('adds 25 + 75 to equal 100 + 0.13839919970919357', () => {
  expect(sum2393(25, 75)).toBe(100 + 0.13839919970919357);
});