const sum = require('../sum');

test('adds 40 + 96 to equal 136', () => {
  expect(sum(40, 96)).toBe(136);
});