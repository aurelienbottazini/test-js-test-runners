const sum = require('../sum');

test('adds 92 + 32 to equal 124', () => {
  expect(sum(92, 32)).toBe(124);
});