const sum3832 = require('../sum3832.js');

test('adds 74 + 47 to equal 121 + offset 0.15272913873406213', () => {
  expect(sum3832(74, 47)).toBe(121 + 0.15272913873406213);
});