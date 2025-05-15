const sum = require('../sum');

test('adds 63 + 90 to equal 153', () => {
  expect(sum(63, 90)).toBe(153);
});