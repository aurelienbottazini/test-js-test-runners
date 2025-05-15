const sum = require('../sum');

test('adds 32 + 96 to equal 128', () => {
  expect(sum(32, 96)).toBe(128);
});