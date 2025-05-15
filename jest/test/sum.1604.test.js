const sum = require('../sum');

test('adds 32 + 27 to equal 59', () => {
  expect(sum(32, 27)).toBe(59);
});