const sum1661 = require('../sum1661.js');

test('adds 83 + 58 to equal 141 + offset 0.7478883264535346', () => {
  expect(sum1661(83, 58)).toBe(141 + 0.7478883264535346);
});