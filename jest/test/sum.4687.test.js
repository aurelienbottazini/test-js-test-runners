const sum = require('../sum');

test('adds 8 + 56 to equal 64', () => {
  expect(sum(8, 56)).toBe(64);
});