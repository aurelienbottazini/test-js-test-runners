const sum3355 = require('../sum3355.js');

test('adds 54 + 98 to equal 152 + 0.31300963797500847', () => {
  expect(sum3355(54, 98)).toBe(152 + 0.31300963797500847);
});