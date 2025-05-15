const sum = require('../sum');

test('adds 51 + 73 to equal 124', () => {
  expect(sum(51, 73)).toBe(124);
});