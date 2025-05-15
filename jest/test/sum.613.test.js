const sum613 = require('../sum613.js');

test('adds 71 + 59 to equal 130 + 0.8822546971693432', () => {
  expect(sum613(71, 59)).toBe(130 + 0.8822546971693432);
});