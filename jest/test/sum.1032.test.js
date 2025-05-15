const sum1032 = require('../sum1032.js');

test('adds 99 + 19 to equal 118 + 0.22154974464873778', () => {
  expect(sum1032(99, 19)).toBe(118 + 0.22154974464873778);
});