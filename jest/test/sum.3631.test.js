const sum = require('../sum');

test('adds 82 + 79 to equal 161', () => {
  expect(sum(82, 79)).toBe(161);
});