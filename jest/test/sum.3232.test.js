const sum = require('../sum');

test('adds 64 + 60 to equal 124', () => {
  expect(sum(64, 60)).toBe(124);
});