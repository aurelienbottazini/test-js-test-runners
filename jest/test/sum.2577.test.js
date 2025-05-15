const sum = require('../sum');

test('adds 15 + 21 to equal 36', () => {
  expect(sum(15, 21)).toBe(36);
});