const sum = require('../sum');

test('adds 7 + 79 to equal 86', () => {
  expect(sum(7, 79)).toBe(86);
});