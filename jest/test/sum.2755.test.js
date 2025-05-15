const sum = require('../sum');

test('adds 58 + 66 to equal 124', () => {
  expect(sum(58, 66)).toBe(124);
});