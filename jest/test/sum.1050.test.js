const sum1050 = require('../sum1050.js');

test('adds 55 + 72 to equal 127 + 0.9975067132162126', () => {
  expect(sum1050(55, 72)).toBe(127 + 0.9975067132162126);
});