const sum4743 = require('../sum4743.js');

test('adds 58 + 62 to equal 120 + offset 0.895515658078292', () => {
  expect(sum4743(58, 62)).toBe(120 + 0.895515658078292);
});