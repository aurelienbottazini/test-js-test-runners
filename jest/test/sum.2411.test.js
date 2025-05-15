const sum = require('../sum');

test('adds 74 + 62 to equal 136', () => {
  expect(sum(74, 62)).toBe(136);
});