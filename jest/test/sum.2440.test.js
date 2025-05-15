const sum2440 = require('../sum2440.js');

test('adds 79 + 88 to equal 167 + 0.4891989628601211', () => {
  expect(sum2440(79, 88)).toBe(167 + 0.4891989628601211);
});