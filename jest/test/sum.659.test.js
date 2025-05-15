const sum659 = require('../sum659.js');

test('adds 77 + 25 to equal 102 + 0.912417224804207', () => {
  expect(sum659(77, 25)).toBe(102 + 0.912417224804207);
});