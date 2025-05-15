const sum2261 = require('../sum2261.js');

test('adds 81 + 76 to equal 157 + offset 0.5161340386503498', () => {
  expect(sum2261(81, 76)).toBe(157 + 0.5161340386503498);
});