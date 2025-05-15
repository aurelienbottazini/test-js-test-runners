const sum = require('../sum');

test('adds 20 + 3 to equal 23', () => {
  expect(sum(20, 3)).toBe(23);
});