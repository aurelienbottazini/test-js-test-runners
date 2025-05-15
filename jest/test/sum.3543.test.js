const sum = require('../sum');

test('adds 56 + 80 to equal 136', () => {
  expect(sum(56, 80)).toBe(136);
});