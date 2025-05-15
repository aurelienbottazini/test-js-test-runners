const sum = require('../sum');

test('adds 31 + 99 to equal 130', () => {
  expect(sum(31, 99)).toBe(130);
});