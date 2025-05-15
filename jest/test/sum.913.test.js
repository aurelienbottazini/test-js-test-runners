const sum913 = require('../sum913.js');

test('adds 80 + 76 to equal 156 + offset 0.7766012900788759', () => {
  expect(sum913(80, 76)).toBe(156 + 0.7766012900788759);
});