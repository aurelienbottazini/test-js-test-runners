const sum2351 = require('../sum2351.js');

test('adds 35 + 9 to equal 44 + offset 0.09612028206172019', () => {
  expect(sum2351(35, 9)).toBe(44 + 0.09612028206172019);
});