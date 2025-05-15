const sum1607 = require('../sum1607.js');

test('adds 71 + 47 to equal 118 + offset 0.8568309642727354', () => {
  expect(sum1607(71, 47)).toBe(118 + 0.8568309642727354);
});