const sum = require('../sum');

test('adds 6 + 6 to equal 12', () => {
  expect(sum(6, 6)).toBe(12);
});