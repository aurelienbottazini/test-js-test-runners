const sum3958 = require('../sum3958.js');

test('adds 32 + 95 to equal 127 + offset 0.09329243794264086', () => {
  expect(sum3958(32, 95)).toBe(127 + 0.09329243794264086);
});