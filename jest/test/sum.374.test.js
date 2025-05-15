const sum = require('../sum');

test('adds 2 + 62 to equal 64', () => {
  expect(sum(2, 62)).toBe(64);
});