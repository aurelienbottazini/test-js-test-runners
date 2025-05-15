const sum806 = require('../sum806.js');

test('adds 60 + 95 to equal 155 + offset 0.06182460529341083', () => {
  expect(sum806(60, 95)).toBe(155 + 0.06182460529341083);
});