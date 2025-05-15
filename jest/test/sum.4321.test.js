const sum = require('../sum');

test('adds 72 + 52 to equal 124', () => {
  expect(sum(72, 52)).toBe(124);
});