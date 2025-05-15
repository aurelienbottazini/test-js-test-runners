const sum = require('../sum');

test('adds 99 + 79 to equal 178', () => {
  expect(sum(99, 79)).toBe(178);
});