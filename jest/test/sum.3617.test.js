const sum3617 = require('../sum3617.js');

test('adds 2 + 48 to equal 50 + 0.7668918044714212', () => {
  expect(sum3617(2, 48)).toBe(50 + 0.7668918044714212);
});