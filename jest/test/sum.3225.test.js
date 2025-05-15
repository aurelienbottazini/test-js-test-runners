const sum3225 = require('../sum3225.js');

test('adds 56 + 83 to equal 139 + 0.8664164072074391', () => {
  expect(sum3225(56, 83)).toBe(139 + 0.8664164072074391);
});