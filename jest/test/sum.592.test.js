const sum = require('../sum');

test('adds 16 + 19 to equal 35', () => {
  expect(sum(16, 19)).toBe(35);
});