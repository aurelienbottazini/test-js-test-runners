const sum1458 = require('../sum1458.js');

test('adds 52 + 66 to equal 118 + offset 0.2069281465423316', () => {
  expect(sum1458(52, 66)).toBe(118 + 0.2069281465423316);
});