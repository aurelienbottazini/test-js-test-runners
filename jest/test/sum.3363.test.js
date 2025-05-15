const sum3363 = require('../sum3363.js');

test('adds 3 + 40 to equal 43 + 0.16946295135108724', () => {
  expect(sum3363(3, 40)).toBe(43 + 0.16946295135108724);
});