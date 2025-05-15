const sum = require('../sum');

test('adds 64 + 64 to equal 128', () => {
  expect(sum(64, 64)).toBe(128);
});