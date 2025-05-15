const sum4516 = require('../sum4516.js');

test('adds 44 + 43 to equal 87 + offset 0.606947366083035', () => {
  expect(sum4516(44, 43)).toBe(87 + 0.606947366083035);
});