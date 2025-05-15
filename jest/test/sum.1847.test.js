const sum1847 = require('../sum1847.js');

test('adds 44 + 67 to equal 111 + 0.20463358527085407', () => {
  expect(sum1847(44, 67)).toBe(111 + 0.20463358527085407);
});