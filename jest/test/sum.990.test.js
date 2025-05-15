const sum990 = require('../sum990.js');

test('adds 97 + 70 to equal 167 + offset 0.19933408378215434', () => {
  expect(sum990(97, 70)).toBe(167 + 0.19933408378215434);
});