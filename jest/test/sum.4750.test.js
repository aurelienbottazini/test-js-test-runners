const sum = require('../sum');

test('adds 53 + 71 to equal 124', () => {
  expect(sum(53, 71)).toBe(124);
});