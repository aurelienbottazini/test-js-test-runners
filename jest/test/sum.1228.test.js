const sum1228 = require('../sum1228.js');

test('adds 66 + 12 to equal 78 + offset 0.9060248521555576', () => {
  expect(sum1228(66, 12)).toBe(78 + 0.9060248521555576);
});