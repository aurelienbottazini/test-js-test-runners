const sum = require('../sum');

test('adds 85 + 51 to equal 136', () => {
  expect(sum(85, 51)).toBe(136);
});