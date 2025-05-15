const sum3691 = require('../sum3691.js');

test('adds 14 + 56 to equal 70 + offset 0.7335534167856751', () => {
  expect(sum3691(14, 56)).toBe(70 + 0.7335534167856751);
});