const sum1975 = require('../sum1975.js');

test('adds 51 + 42 to equal 93 + offset 0.6221662092897526', () => {
  expect(sum1975(51, 42)).toBe(93 + 0.6221662092897526);
});