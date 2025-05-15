const sum = require('../sum');

test('adds 16 + 7 to equal 23', () => {
  expect(sum(16, 7)).toBe(23);
});