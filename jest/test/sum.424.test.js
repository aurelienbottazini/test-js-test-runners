const sum = require('../sum');

test('adds 43 + 32 to equal 75', () => {
  expect(sum(43, 32)).toBe(75);
});