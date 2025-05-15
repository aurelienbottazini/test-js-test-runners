const sum3804 = require('../sum3804.js');

test('adds 65 + 51 to equal 116 + offset 0.601990785357929', () => {
  expect(sum3804(65, 51)).toBe(116 + 0.601990785357929);
});