const sum3794 = require('../sum3794.js');

test('adds 60 + 8 to equal 68 + offset 0.15155537926663698', () => {
  expect(sum3794(60, 8)).toBe(68 + 0.15155537926663698);
});