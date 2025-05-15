const sum4628 = require('../sum4628.js');

test('adds 94 + 98 to equal 192 + offset 0.05550396486714837', () => {
  expect(sum4628(94, 98)).toBe(192 + 0.05550396486714837);
});