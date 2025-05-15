const sum = require('../sum');

test('adds 77 + 23 to equal 100', () => {
  expect(sum(77, 23)).toBe(100);
});