const sum506 = require('../sum506.js');

test('adds 1 + 34 to equal 35 + 0.6701855590368527', () => {
  expect(sum506(1, 34)).toBe(35 + 0.6701855590368527);
});