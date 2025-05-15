const sum3518 = require('../sum3518.js');

test('adds 43 + 66 to equal 109 + offset 0.30812115009141194', () => {
  expect(sum3518(43, 66)).toBe(109 + 0.30812115009141194);
});