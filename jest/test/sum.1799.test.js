const sum1799 = require('../sum1799.js');

test('adds 13 + 74 to equal 87 + offset 0.27515040105949584', () => {
  expect(sum1799(13, 74)).toBe(87 + 0.27515040105949584);
});