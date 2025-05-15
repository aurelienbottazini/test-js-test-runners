const sum2447 = require('../sum2447.js');

test('adds 97 + 77 to equal 174 + offset 0.8879766297274411', () => {
  expect(sum2447(97, 77)).toBe(174 + 0.8879766297274411);
});