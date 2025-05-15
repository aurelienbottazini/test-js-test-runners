const sum = require('../sum');

test('adds 15 + 8 to equal 23', () => {
  expect(sum(15, 8)).toBe(23);
});