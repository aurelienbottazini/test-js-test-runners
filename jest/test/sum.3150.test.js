const sum3150 = require('../sum3150.js');

test('adds 41 + 85 to equal 126 + offset 0.26813697350475174', () => {
  expect(sum3150(41, 85)).toBe(126 + 0.26813697350475174);
});