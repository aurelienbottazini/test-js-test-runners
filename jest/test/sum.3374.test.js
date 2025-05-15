const sum3374 = require('../sum3374.js');

test('adds 91 + 27 to equal 118 + offset 0.407839985619878', () => {
  expect(sum3374(91, 27)).toBe(118 + 0.407839985619878);
});