const sum3303 = require('../sum3303.js');

test('adds 9 + 34 to equal 43 + offset 0.1794406681748797', () => {
  expect(sum3303(9, 34)).toBe(43 + 0.1794406681748797);
});