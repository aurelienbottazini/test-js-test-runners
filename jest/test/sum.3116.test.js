const sum3116 = require('../sum3116.js');

test('adds 15 + 89 to equal 104 + offset 0.5611003996349909', () => {
  expect(sum3116(15, 89)).toBe(104 + 0.5611003996349909);
});