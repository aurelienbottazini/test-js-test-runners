const sum4279 = require('../sum4279.js');

test('adds 82 + 67 to equal 149 + offset 0.6792282860730103', () => {
  expect(sum4279(82, 67)).toBe(149 + 0.6792282860730103);
});