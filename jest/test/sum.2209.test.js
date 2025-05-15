const sum2209 = require('../sum2209.js');

test('adds 35 + 95 to equal 130 + offset 0.3421595067725478', () => {
  expect(sum2209(35, 95)).toBe(130 + 0.3421595067725478);
});