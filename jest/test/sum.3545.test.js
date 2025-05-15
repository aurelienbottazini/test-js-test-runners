const sum = require('../sum');

test('adds 25 + 19 to equal 44', () => {
  expect(sum(25, 19)).toBe(44);
});