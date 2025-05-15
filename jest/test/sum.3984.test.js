const sum = require('../sum');

test('adds 11 + 25 to equal 36', () => {
  expect(sum(11, 25)).toBe(36);
});