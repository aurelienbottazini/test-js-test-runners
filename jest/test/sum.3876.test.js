const sum3876 = require('../sum3876.js');

test('adds 6 + 94 to equal 100 + offset 0.5701221759924411', () => {
  expect(sum3876(6, 94)).toBe(100 + 0.5701221759924411);
});