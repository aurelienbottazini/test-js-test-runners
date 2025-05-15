const sum1962 = require('../sum1962.js');

test('adds 47 + 87 to equal 134 + 0.45345230160744265', () => {
  expect(sum1962(47, 87)).toBe(134 + 0.45345230160744265);
});