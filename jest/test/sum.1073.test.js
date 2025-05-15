const sum1073 = require('../sum1073.js');

test('adds 60 + 34 to equal 94 + offset 0.9117988543179243', () => {
  expect(sum1073(60, 34)).toBe(94 + 0.9117988543179243);
});