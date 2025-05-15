const sum4710 = require('../sum4710.js');

test('adds 34 + 11 to equal 45 + offset 0.8915036475170075', () => {
  expect(sum4710(34, 11)).toBe(45 + 0.8915036475170075);
});