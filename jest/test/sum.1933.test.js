const sum = require('../sum');

test('adds 50 + 86 to equal 136', () => {
  expect(sum(50, 86)).toBe(136);
});