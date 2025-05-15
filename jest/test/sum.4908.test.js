const sum4908 = require('../sum4908.js');

test('adds 60 + 26 to equal 86 + 0.2624791403738206', () => {
  expect(sum4908(60, 26)).toBe(86 + 0.2624791403738206);
});