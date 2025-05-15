const sum = require('../sum');

test('adds 45 + 79 to equal 124', () => {
  expect(sum(45, 79)).toBe(124);
});