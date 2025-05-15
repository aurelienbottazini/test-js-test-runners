const sum4156 = require('../sum4156.js');

test('adds 28 + 66 to equal 94 + 0.3050604682175071', () => {
  expect(sum4156(28, 66)).toBe(94 + 0.3050604682175071);
});