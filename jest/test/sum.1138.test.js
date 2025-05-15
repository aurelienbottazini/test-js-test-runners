const sum = require('../sum');

test('adds 3 + 19 to equal 22', () => {
  expect(sum(3, 19)).toBe(22);
});