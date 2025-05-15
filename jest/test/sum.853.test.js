const sum853 = require('../sum853.js');

test('adds 96 + 45 to equal 141 + offset 0.21695388496985735', () => {
  expect(sum853(96, 45)).toBe(141 + 0.21695388496985735);
});