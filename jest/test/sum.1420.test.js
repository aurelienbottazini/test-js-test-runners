const sum1420 = require('../sum1420.js');

test('adds 78 + 20 to equal 98 + 0.1935726160381609', () => {
  expect(sum1420(78, 20)).toBe(98 + 0.1935726160381609);
});