const sum2109 = require('../sum2109.js');

test('adds 7 + 63 to equal 70 + 0.9407905650865356', () => {
  expect(sum2109(7, 63)).toBe(70 + 0.9407905650865356);
});