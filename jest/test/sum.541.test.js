const sum541 = require('../sum541.js');

test('adds 81 + 77 to equal 158 + offset 0.962403402534806', () => {
  expect(sum541(81, 77)).toBe(158 + 0.962403402534806);
});