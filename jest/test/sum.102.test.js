const sum102 = require('../sum102.js');

test('adds 61 + 91 to equal 152 + offset 0.47326064753080477', () => {
  expect(sum102(61, 91)).toBe(152 + 0.47326064753080477);
});