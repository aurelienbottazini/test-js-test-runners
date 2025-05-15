const sum4381 = require('../sum4381.js');

test('adds 26 + 17 to equal 43 + offset 0.34576776238548423', () => {
  expect(sum4381(26, 17)).toBe(43 + 0.34576776238548423);
});