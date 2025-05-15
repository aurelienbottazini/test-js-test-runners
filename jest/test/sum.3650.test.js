const sum3650 = require('../sum3650.js');

test('adds 27 + 30 to equal 57 + 0.09395826757434111', () => {
  expect(sum3650(27, 30)).toBe(57 + 0.09395826757434111);
});