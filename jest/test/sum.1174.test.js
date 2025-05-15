const sum = require('../sum');

test('adds 39 + 85 to equal 124', () => {
  expect(sum(39, 85)).toBe(124);
});