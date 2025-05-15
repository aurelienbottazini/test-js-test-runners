const sum7 = require('../sum7.js');

test('adds 82 + 23 to equal 105 + 0.4446846982620506', () => {
  expect(sum7(82, 23)).toBe(105 + 0.4446846982620506);
});