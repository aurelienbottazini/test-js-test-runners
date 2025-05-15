const sum4304 = require('../sum4304.js');

test('adds 5 + 45 to equal 50 + 0.030500351425982508', () => {
  expect(sum4304(5, 45)).toBe(50 + 0.030500351425982508);
});