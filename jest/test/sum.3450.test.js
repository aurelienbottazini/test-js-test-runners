const sum3450 = require('../sum3450.js');

test('adds 5 + 51 to equal 56 + offset 0.2894742227369035', () => {
  expect(sum3450(5, 51)).toBe(56 + 0.2894742227369035);
});