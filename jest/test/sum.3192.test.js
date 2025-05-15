const sum3192 = require('../sum3192.js');

test('adds 52 + 77 to equal 129 + 0.8708315635038058', () => {
  expect(sum3192(52, 77)).toBe(129 + 0.8708315635038058);
});