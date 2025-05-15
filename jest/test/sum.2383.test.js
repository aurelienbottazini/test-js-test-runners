const sum = require('../sum');

test('adds 88 + 36 to equal 124', () => {
  expect(sum(88, 36)).toBe(124);
});