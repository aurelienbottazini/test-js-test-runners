const sum169 = require('../sum169.js');

test('adds 93 + 44 to equal 137 + 0.37986826746014646', () => {
  expect(sum169(93, 44)).toBe(137 + 0.37986826746014646);
});