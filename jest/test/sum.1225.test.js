const sum1225 = require('../sum1225.js');

test('adds 59 + 85 to equal 144 + 0.3501298542229643', () => {
  expect(sum1225(59, 85)).toBe(144 + 0.3501298542229643);
});