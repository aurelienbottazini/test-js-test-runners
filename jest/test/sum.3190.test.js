const sum = require('../sum');

test('adds 44 + 15 to equal 59', () => {
  expect(sum(44, 15)).toBe(59);
});