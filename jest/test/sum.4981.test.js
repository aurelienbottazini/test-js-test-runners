const sum4981 = require('../sum4981.js');

test('adds 34 + 8 to equal 42 + offset 0.6233988834124081', () => {
  expect(sum4981(34, 8)).toBe(42 + 0.6233988834124081);
});