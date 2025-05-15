const sum421 = require('../sum421.js');

test('adds 4 + 31 to equal 35 + 0.14987319554682998', () => {
  expect(sum421(4, 31)).toBe(35 + 0.14987319554682998);
});