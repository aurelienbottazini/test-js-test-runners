const sum3637 = require('../sum3637.js');

test('adds 18 + 43 to equal 61 + 0.36731743890220114', () => {
  expect(sum3637(18, 43)).toBe(61 + 0.36731743890220114);
});