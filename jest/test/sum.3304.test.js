const sum3304 = require('../sum3304.js');

test('adds 56 + 34 to equal 90 + offset 0.4528400545685167', () => {
  expect(sum3304(56, 34)).toBe(90 + 0.4528400545685167);
});