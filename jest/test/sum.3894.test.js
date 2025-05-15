const sum = require('../sum');

test('adds 38 + 98 to equal 136', () => {
  expect(sum(38, 98)).toBe(136);
});