const sum1408 = require('../sum1408.js');

test('adds 93 + 32 to equal 125 + 0.49399194265841706', () => {
  expect(sum1408(93, 32)).toBe(125 + 0.49399194265841706);
});