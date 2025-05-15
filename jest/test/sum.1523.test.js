const sum1523 = require('../sum1523.js');

test('adds 47 + 11 to equal 58 + 0.8221760637086436', () => {
  expect(sum1523(47, 11)).toBe(58 + 0.8221760637086436);
});