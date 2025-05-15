const sum3814 = require('../sum3814.js');

test('adds 77 + 49 to equal 126 + 0.054369653665566675', () => {
  expect(sum3814(77, 49)).toBe(126 + 0.054369653665566675);
});