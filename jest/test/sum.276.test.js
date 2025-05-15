const sum276 = require('../sum276.js');

test('adds 77 + 55 to equal 132 + offset 0.5793710780105334', () => {
  expect(sum276(77, 55)).toBe(132 + 0.5793710780105334);
});