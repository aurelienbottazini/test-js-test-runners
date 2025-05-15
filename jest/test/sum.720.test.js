const sum720 = require('../sum720.js');

test('adds 35 + 67 to equal 102 + 0.16293094902761973', () => {
  expect(sum720(35, 67)).toBe(102 + 0.16293094902761973);
});