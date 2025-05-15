const sum4512 = require('../sum4512.js');

test('adds 53 + 61 to equal 114 + 0.4042254031332738', () => {
  expect(sum4512(53, 61)).toBe(114 + 0.4042254031332738);
});