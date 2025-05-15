const sum4949 = require('../sum4949.js');

test('adds 11 + 77 to equal 88 + offset 0.5904656277005436', () => {
  expect(sum4949(11, 77)).toBe(88 + 0.5904656277005436);
});