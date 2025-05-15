const sum1923 = require('../sum1923.js');

test('adds 49 + 1 to equal 50 + 0.9109976978291666', () => {
  expect(sum1923(49, 1)).toBe(50 + 0.9109976978291666);
});