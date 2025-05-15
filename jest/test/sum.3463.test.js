const sum3463 = require('../sum3463.js');

test('adds 30 + 81 to equal 111 + 0.7781317661564353', () => {
  expect(sum3463(30, 81)).toBe(111 + 0.7781317661564353);
});