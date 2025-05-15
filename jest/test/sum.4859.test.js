const sum = require('../sum');

test('adds 67 + 69 to equal 136', () => {
  expect(sum(67, 69)).toBe(136);
});