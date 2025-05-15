const sum = require('../sum');

test('adds 32 + 18 to equal 50', () => {
  expect(sum(32, 18)).toBe(50);
});