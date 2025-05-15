const sum3343 = require('../sum3343.js');

test('adds 26 + 39 to equal 65 + 0.9191353084808048', () => {
  expect(sum3343(26, 39)).toBe(65 + 0.9191353084808048);
});