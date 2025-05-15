const sum2621 = require('../sum2621.js');

test('adds 44 + 29 to equal 73 + offset 0.6979737915116176', () => {
  expect(sum2621(44, 29)).toBe(73 + 0.6979737915116176);
});