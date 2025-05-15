const sum3663 = require('../sum3663.js');

test('adds 50 + 73 to equal 123 + 0.8769627643121234', () => {
  expect(sum3663(50, 73)).toBe(123 + 0.8769627643121234);
});