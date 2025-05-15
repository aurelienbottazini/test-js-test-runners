const sum1086 = require('../sum1086.js');

test('adds 98 + 76 to equal 174 + offset 0.5144726906559642', () => {
  expect(sum1086(98, 76)).toBe(174 + 0.5144726906559642);
});