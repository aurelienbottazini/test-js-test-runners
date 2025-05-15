const sum3269 = require('../sum3269.js');

test('adds 26 + 84 to equal 110 + offset 0.36208305123934903', () => {
  expect(sum3269(26, 84)).toBe(110 + 0.36208305123934903);
});