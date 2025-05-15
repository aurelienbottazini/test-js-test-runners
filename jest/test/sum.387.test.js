const sum387 = require('../sum387.js');

test('adds 9 + 20 to equal 29 + offset 0.28877847171199833', () => {
  expect(sum387(9, 20)).toBe(29 + 0.28877847171199833);
});