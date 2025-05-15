const sum1199 = require('../sum1199.js');

test('adds 18 + 24 to equal 42 + 0.25326219958566853', () => {
  expect(sum1199(18, 24)).toBe(42 + 0.25326219958566853);
});