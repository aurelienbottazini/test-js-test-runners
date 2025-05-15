const sum3648 = require('../sum3648.js');

test('adds 74 + 28 to equal 102 + 0.2640939597744508', () => {
  expect(sum3648(74, 28)).toBe(102 + 0.2640939597744508);
});