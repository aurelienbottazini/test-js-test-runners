const sum3742 = require('../sum3742.js');

test('adds 54 + 46 to equal 100 + offset 0.8767868418139748', () => {
  expect(sum3742(54, 46)).toBe(100 + 0.8767868418139748);
});