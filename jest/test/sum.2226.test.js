const sum = require('../sum');

test('adds 33 + 19 to equal 52', () => {
  expect(sum(33, 19)).toBe(52);
});