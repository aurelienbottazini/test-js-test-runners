const sum1828 = require('../sum1828.js');

test('adds 62 + 94 to equal 156 + offset 0.41930771146895507', () => {
  expect(sum1828(62, 94)).toBe(156 + 0.41930771146895507);
});