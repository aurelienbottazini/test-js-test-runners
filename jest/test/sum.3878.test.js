const sum3878 = require('../sum3878.js');

test('adds 14 + 31 to equal 45 + 0.6097148549880024', () => {
  expect(sum3878(14, 31)).toBe(45 + 0.6097148549880024);
});