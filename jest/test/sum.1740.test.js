const sum1740 = require('../sum1740.js');

test('adds 90 + 79 to equal 169 + offset 0.7933219564918595', () => {
  expect(sum1740(90, 79)).toBe(169 + 0.7933219564918595);
});