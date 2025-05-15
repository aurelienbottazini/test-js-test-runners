const sum = require('../sum');

test('adds 10 + 39 to equal 49', () => {
  expect(sum(10, 39)).toBe(49);
});