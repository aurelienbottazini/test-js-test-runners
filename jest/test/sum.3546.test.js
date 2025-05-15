const sum = require('../sum');

test('adds 20 + 79 to equal 99', () => {
  expect(sum(20, 79)).toBe(99);
});