const sum3096 = require('../sum3096.js');

test('adds 40 + 47 to equal 87 + offset 0.732166846567157', () => {
  expect(sum3096(40, 47)).toBe(87 + 0.732166846567157);
});