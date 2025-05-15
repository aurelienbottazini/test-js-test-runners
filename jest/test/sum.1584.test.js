const sum1584 = require('../sum1584.js');

test('adds 97 + 97 to equal 194 + offset 0.2629763200041122', () => {
  expect(sum1584(97, 97)).toBe(194 + 0.2629763200041122);
});