const sum = require('../sum');

test('adds 10 + 19 to equal 29', () => {
  expect(sum(10, 19)).toBe(29);
});