const sum = require('../sum');

test('adds 34 + 19 to equal 53', () => {
  expect(sum(34, 19)).toBe(53);
});