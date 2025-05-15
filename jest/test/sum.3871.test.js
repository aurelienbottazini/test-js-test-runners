const sum = require('../sum');

test('adds 18 + 41 to equal 59', () => {
  expect(sum(18, 41)).toBe(59);
});