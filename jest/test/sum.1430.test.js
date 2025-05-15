const sum = require('../sum');

test('adds 60 + 39 to equal 99', () => {
  expect(sum(60, 39)).toBe(99);
});