const sum1011 = require('../sum1011.js');

test('adds 92 + 22 to equal 114 + 0.5982433916015115', () => {
  expect(sum1011(92, 22)).toBe(114 + 0.5982433916015115);
});