const sum3704 = require('../sum3704.js');

test('adds 80 + 34 to equal 114 + offset 0.7669009344054226', () => {
  expect(sum3704(80, 34)).toBe(114 + 0.7669009344054226);
});