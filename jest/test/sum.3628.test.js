const sum3628 = require('../sum3628.js');

test('adds 27 + 39 to equal 66 + 0.28846209242875753', () => {
  expect(sum3628(27, 39)).toBe(66 + 0.28846209242875753);
});