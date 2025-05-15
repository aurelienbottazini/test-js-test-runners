const sum = require('../sum');

test('adds 89 + 79 to equal 168', () => {
  expect(sum(89, 79)).toBe(168);
});