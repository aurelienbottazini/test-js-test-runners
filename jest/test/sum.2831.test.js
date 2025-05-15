const sum2831 = require('../sum2831.js');

test('adds 38 + 22 to equal 60 + 0.693071474450103', () => {
  expect(sum2831(38, 22)).toBe(60 + 0.693071474450103);
});