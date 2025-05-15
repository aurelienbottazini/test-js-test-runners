const sum2212 = require('../sum2212.js');

test('adds 55 + 20 to equal 75 + offset 0.5081669365743832', () => {
  expect(sum2212(55, 20)).toBe(75 + 0.5081669365743832);
});