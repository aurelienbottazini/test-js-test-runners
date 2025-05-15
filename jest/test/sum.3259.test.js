const sum3259 = require('../sum3259.js');

test('adds 40 + 91 to equal 131 + 0.592948329374375', () => {
  expect(sum3259(40, 91)).toBe(131 + 0.592948329374375);
});