const sum1298 = require('../sum1298.js');

test('adds 60 + 58 to equal 118 + offset 0.5684829499721199', () => {
  expect(sum1298(60, 58)).toBe(118 + 0.5684829499721199);
});