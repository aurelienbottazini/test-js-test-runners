const sum3954 = require('../sum3954.js');

test('adds 50 + 69 to equal 119 + offset 0.7548433484871101', () => {
  expect(sum3954(50, 69)).toBe(119 + 0.7548433484871101);
});