const sum3227 = require('../sum3227.js');

test('adds 63 + 38 to equal 101 + offset 0.0019944626302910162', () => {
  expect(sum3227(63, 38)).toBe(101 + 0.0019944626302910162);
});