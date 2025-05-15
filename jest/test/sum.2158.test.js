const sum2158 = require('../sum2158.js');

test('adds 22 + 96 to equal 118 + 0.5814898425951839', () => {
  expect(sum2158(22, 96)).toBe(118 + 0.5814898425951839);
});