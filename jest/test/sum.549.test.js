const sum549 = require('../sum549.js');

test('adds 16 + 28 to equal 44 + offset 0.30539860481894343', () => {
  expect(sum549(16, 28)).toBe(44 + 0.30539860481894343);
});