const sum = require('../sum');

test('adds 63 + 19 to equal 82', () => {
  expect(sum(63, 19)).toBe(82);
});