const sum15 = require('../sum15.js');

test('adds 38 + 82 to equal 120 + 0.765956932293227', () => {
  expect(sum15(38, 82)).toBe(120 + 0.765956932293227);
});