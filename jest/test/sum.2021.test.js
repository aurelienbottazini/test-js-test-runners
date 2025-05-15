const sum2021 = require('../sum2021.js');

test('adds 66 + 99 to equal 165 + offset 0.5636051624000106', () => {
  expect(sum2021(66, 99)).toBe(165 + 0.5636051624000106);
});