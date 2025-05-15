const sum = require('../sum');

test('adds 24 + 40 to equal 64', () => {
  expect(sum(24, 40)).toBe(64);
});