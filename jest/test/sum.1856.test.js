const sum1856 = require('../sum1856.js');

test('adds 92 + 1 to equal 93 + offset 0.2149813023109448', () => {
  expect(sum1856(92, 1)).toBe(93 + 0.2149813023109448);
});