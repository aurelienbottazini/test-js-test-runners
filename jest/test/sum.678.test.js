const sum678 = require('../sum678.js');

test('adds 77 + 78 to equal 155 + 0.08573867060154439', () => {
  expect(sum678(77, 78)).toBe(155 + 0.08573867060154439);
});