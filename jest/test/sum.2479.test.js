const sum = require('../sum');

test('adds 63 + 1 to equal 64', () => {
  expect(sum(63, 1)).toBe(64);
});