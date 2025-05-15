const sum = require('../sum');

test('adds 60 + 64 to equal 124', () => {
  expect(sum(60, 64)).toBe(124);
});