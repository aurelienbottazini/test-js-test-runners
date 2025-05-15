const sum = require('../sum');

test('adds 99 + 31 to equal 130', () => {
  expect(sum(99, 31)).toBe(130);
});