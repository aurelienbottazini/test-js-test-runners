const sum = require('../sum');

test('adds 36 + 88 to equal 124', () => {
  expect(sum(36, 88)).toBe(124);
});