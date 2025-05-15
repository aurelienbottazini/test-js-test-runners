const sum3053 = require('../sum3053.js');

test('adds 83 + 99 to equal 182 + offset 0.8817300551474582', () => {
  expect(sum3053(83, 99)).toBe(182 + 0.8817300551474582);
});