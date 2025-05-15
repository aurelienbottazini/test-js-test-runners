const sum = require('../sum');

test('adds 12 + 19 to equal 31', () => {
  expect(sum(12, 19)).toBe(31);
});