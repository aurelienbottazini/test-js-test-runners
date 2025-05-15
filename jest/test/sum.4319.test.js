const sum4319 = require('../sum4319.js');

test('adds 67 + 2 to equal 69 + offset 0.07638832580763444', () => {
  expect(sum4319(67, 2)).toBe(69 + 0.07638832580763444);
});