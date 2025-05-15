const sum = require('../sum');

test('adds 12 + 52 to equal 64', () => {
  expect(sum(12, 52)).toBe(64);
});