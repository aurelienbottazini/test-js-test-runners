const sum = require('../sum');

test('adds 2 + 10 to equal 12', () => {
  expect(sum(2, 10)).toBe(12);
});