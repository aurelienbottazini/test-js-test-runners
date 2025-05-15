const sum3461 = require('../sum3461.js');

test('adds 4 + 49 to equal 53 + offset 0.4854826964746508', () => {
  expect(sum3461(4, 49)).toBe(53 + 0.4854826964746508);
});