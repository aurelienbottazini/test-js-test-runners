const sum1799 = require('../sum1799.js');

test('adds 75 + 2 to equal 77 + 0.8946925567932191', () => {
  expect(sum1799(75, 2)).toBe(77 + 0.8946925567932191);
});