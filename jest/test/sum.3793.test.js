const sum3793 = require('../sum3793.js');

test('adds 99 + 55 to equal 154 + 0.06804590006661393', () => {
  expect(sum3793(99, 55)).toBe(154 + 0.06804590006661393);
});