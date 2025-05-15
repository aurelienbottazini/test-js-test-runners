const sum1791 = require('../sum1791.js');

test('adds 95 + 16 to equal 111 + 0.38282498518601604', () => {
  expect(sum1791(95, 16)).toBe(111 + 0.38282498518601604);
});