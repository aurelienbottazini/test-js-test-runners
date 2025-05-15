const sum = require('../sum');

test('adds 0 + 64 to equal 64', () => {
  expect(sum(0, 64)).toBe(64);
});