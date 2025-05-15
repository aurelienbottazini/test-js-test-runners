const sum = require('../sum');

test('adds 12 + 47 to equal 59', () => {
  expect(sum(12, 47)).toBe(59);
});