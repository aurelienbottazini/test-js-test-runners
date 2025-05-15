const sum = require('../sum');

test('adds 64 + 0 to equal 64', () => {
  expect(sum(64, 0)).toBe(64);
});