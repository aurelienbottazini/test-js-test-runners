const sum = require('../sum');

test('adds 49 + 75 to equal 124', () => {
  expect(sum(49, 75)).toBe(124);
});