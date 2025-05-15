const sum1872 = require('../sum1872.js');

test('adds 74 + 96 to equal 170 + 0.09069196876604535', () => {
  expect(sum1872(74, 96)).toBe(170 + 0.09069196876604535);
});