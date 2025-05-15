const sum4617 = require('../sum4617.js');

test('adds 41 + 82 to equal 123 + 0.5119898606560991', () => {
  expect(sum4617(41, 82)).toBe(123 + 0.5119898606560991);
});