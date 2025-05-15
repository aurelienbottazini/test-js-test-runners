const sum3498 = require('../sum3498.js');

test('adds 29 + 18 to equal 47 + 0.2830219586921837', () => {
  expect(sum3498(29, 18)).toBe(47 + 0.2830219586921837);
});