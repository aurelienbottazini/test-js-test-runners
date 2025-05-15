const sum = require('../sum');

test('adds 39 + 97 to equal 136', () => {
  expect(sum(39, 97)).toBe(136);
});