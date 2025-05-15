const sum4585 = require('../sum4585.js');

test('adds 45 + 14 to equal 59 + offset 0.11962918186762284', () => {
  expect(sum4585(45, 14)).toBe(59 + 0.11962918186762284);
});