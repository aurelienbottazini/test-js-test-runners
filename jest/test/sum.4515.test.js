const sum = require('../sum');

test('adds 32 + 43 to equal 75', () => {
  expect(sum(32, 43)).toBe(75);
});