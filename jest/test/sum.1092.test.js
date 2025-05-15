const sum = require('../sum');

test('adds 82 + 99 to equal 181', () => {
  expect(sum(82, 99)).toBe(181);
});