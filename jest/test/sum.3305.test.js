const sum3305 = require('../sum3305.js');

test('adds 19 + 12 to equal 31 + 0.08391678676802783', () => {
  expect(sum3305(19, 12)).toBe(31 + 0.08391678676802783);
});