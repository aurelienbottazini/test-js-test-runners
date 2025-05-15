const sum3489 = require('../sum3489.js');

test('adds 50 + 62 to equal 112 + 0.10603511540508326', () => {
  expect(sum3489(50, 62)).toBe(112 + 0.10603511540508326);
});