const sum = require('../sum');

test('adds 17 + 6 to equal 23', () => {
  expect(sum(17, 6)).toBe(23);
});