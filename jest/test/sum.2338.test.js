const sum2338 = require('../sum2338.js');

test('adds 35 + 66 to equal 101 + offset 0.8957836730476361', () => {
  expect(sum2338(35, 66)).toBe(101 + 0.8957836730476361);
});