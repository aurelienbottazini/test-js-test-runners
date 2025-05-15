const sum2484 = require('../sum2484.js');

test('adds 72 + 21 to equal 93 + 0.9165188545526094', () => {
  expect(sum2484(72, 21)).toBe(93 + 0.9165188545526094);
});