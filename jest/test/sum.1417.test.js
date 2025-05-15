const sum1417 = require('../sum1417.js');

test('adds 62 + 9 to equal 71 + offset 0.09315271639774614', () => {
  expect(sum1417(62, 9)).toBe(71 + 0.09315271639774614);
});