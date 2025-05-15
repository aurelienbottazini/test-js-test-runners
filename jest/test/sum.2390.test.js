const sum2390 = require('../sum2390.js');

test('adds 99 + 66 to equal 165 + 0.0958631410639762', () => {
  expect(sum2390(99, 66)).toBe(165 + 0.0958631410639762);
});