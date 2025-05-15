const sum = require('../sum');

test('adds 1 + 39 to equal 40', () => {
  expect(sum(1, 39)).toBe(40);
});