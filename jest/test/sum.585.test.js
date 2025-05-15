const sum = require('../sum');

test('adds 42 + 79 to equal 121', () => {
  expect(sum(42, 79)).toBe(121);
});