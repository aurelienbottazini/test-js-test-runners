const sum1793 = require('../sum1793.js');

test('adds 2 + 60 to equal 62 + offset 0.17125627023409384', () => {
  expect(sum1793(2, 60)).toBe(62 + 0.17125627023409384);
});