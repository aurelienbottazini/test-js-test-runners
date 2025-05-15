const sum2410 = require('../sum2410.js');

test('adds 93 + 7 to equal 100 + 0.569627355582739', () => {
  expect(sum2410(93, 7)).toBe(100 + 0.569627355582739);
});