const sum1061 = require('../sum1061.js');

test('adds 12 + 47 to equal 59 + 0.9182716245886402', () => {
  expect(sum1061(12, 47)).toBe(59 + 0.9182716245886402);
});