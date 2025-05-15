const sum = require('../sum');

test('adds 4 + 19 to equal 23', () => {
  expect(sum(4, 19)).toBe(23);
});