const sum3273 = require('../sum3273.js');

test('adds 9 + 50 to equal 59 + offset 0.2255150835420321', () => {
  expect(sum3273(9, 50)).toBe(59 + 0.2255150835420321);
});