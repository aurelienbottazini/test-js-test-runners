const sum2884 = require('../sum2884.js');

test('adds 58 + 70 to equal 128 + offset 0.9257746682623634', () => {
  expect(sum2884(58, 70)).toBe(128 + 0.9257746682623634);
});