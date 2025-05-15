const sum1807 = require('../sum1807.js');

test('adds 11 + 58 to equal 69 + offset 0.6360695552907712', () => {
  expect(sum1807(11, 58)).toBe(69 + 0.6360695552907712);
});