const sum2481 = require('../sum2481.js');

test('adds 84 + 19 to equal 103 + offset 0.11600875450827697', () => {
  expect(sum2481(84, 19)).toBe(103 + 0.11600875450827697);
});