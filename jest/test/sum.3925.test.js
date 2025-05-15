const sum3925 = require('../sum3925.js');

test('adds 26 + 94 to equal 120 + 0.7046436506804609', () => {
  expect(sum3925(26, 94)).toBe(120 + 0.7046436506804609);
});