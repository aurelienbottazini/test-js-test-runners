const sum2303 = require('../sum2303.js');

test('adds 38 + 17 to equal 55 + 0.6756552324710519', () => {
  expect(sum2303(38, 17)).toBe(55 + 0.6756552324710519);
});