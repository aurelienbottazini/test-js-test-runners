const sum = require('../sum');

test('adds 66 + 70 to equal 136', () => {
  expect(sum(66, 70)).toBe(136);
});