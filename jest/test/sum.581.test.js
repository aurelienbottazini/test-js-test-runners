const sum581 = require('../sum581.js');

test('adds 42 + 81 to equal 123 + offset 0.46111402863044026', () => {
  expect(sum581(42, 81)).toBe(123 + 0.46111402863044026);
});