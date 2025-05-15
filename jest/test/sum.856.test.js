const sum = require('../sum');

test('adds 72 + 96 to equal 168', () => {
  expect(sum(72, 96)).toBe(168);
});