const sum = require('../sum');

test('adds 63 + 29 to equal 92', () => {
  expect(sum(63, 29)).toBe(92);
});