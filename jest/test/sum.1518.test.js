const sum1518 = require('../sum1518.js');

test('adds 11 + 59 to equal 70 + offset 0.6153036463561431', () => {
  expect(sum1518(11, 59)).toBe(70 + 0.6153036463561431);
});