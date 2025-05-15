const sum = require('../sum');

test('adds 36 + 23 to equal 59', () => {
  expect(sum(36, 23)).toBe(59);
});