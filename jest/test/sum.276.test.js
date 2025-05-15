const sum = require('../sum');

test('adds 3 + 20 to equal 23', () => {
  expect(sum(3, 20)).toBe(23);
});