const sum = require('../sum');

test('adds 49 + 15 to equal 64', () => {
  expect(sum(49, 15)).toBe(64);
});