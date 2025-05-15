const sum2485 = require('../sum2485.js');

test('adds 56 + 36 to equal 92 + 0.6008578933355497', () => {
  expect(sum2485(56, 36)).toBe(92 + 0.6008578933355497);
});