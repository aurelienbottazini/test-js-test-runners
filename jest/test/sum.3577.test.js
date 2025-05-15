const sum = require('../sum');

test('adds 63 + 3 to equal 66', () => {
  expect(sum(63, 3)).toBe(66);
});