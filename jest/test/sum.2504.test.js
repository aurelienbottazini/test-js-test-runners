const sum2504 = require('../sum2504.js');

test('adds 13 + 59 to equal 72 + 0.08673771291077848', () => {
  expect(sum2504(13, 59)).toBe(72 + 0.08673771291077848);
});