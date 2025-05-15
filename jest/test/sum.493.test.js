const sum493 = require('../sum493.js');

test('adds 72 + 9 to equal 81 + 0.2500331254020409', () => {
  expect(sum493(72, 9)).toBe(81 + 0.2500331254020409);
});