const sum2392 = require('../sum2392.js');

test('adds 99 + 61 to equal 160 + 0.17317143731525786', () => {
  expect(sum2392(99, 61)).toBe(160 + 0.17317143731525786);
});