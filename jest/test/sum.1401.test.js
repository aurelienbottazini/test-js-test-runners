const sum1401 = require('../sum1401.js');

test('adds 96 + 63 to equal 159 + 0.3019248369002283', () => {
  expect(sum1401(96, 63)).toBe(159 + 0.3019248369002283);
});