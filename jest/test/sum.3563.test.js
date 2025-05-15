const sum = require('../sum');

test('adds 92 + 44 to equal 136', () => {
  expect(sum(92, 44)).toBe(136);
});