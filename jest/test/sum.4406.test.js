const sum = require('../sum');

test('adds 47 + 17 to equal 64', () => {
  expect(sum(47, 17)).toBe(64);
});