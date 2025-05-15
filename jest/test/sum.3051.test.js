const sum3051 = require('../sum3051.js');

test('adds 4 + 55 to equal 59 + 0.4661147534907608', () => {
  expect(sum3051(4, 55)).toBe(59 + 0.4661147534907608);
});