const sum3742 = require('../sum3742.js');

test('adds 16 + 50 to equal 66 + 0.4157259179777837', () => {
  expect(sum3742(16, 50)).toBe(66 + 0.4157259179777837);
});