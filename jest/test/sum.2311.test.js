const sum = require('../sum');

test('adds 24 + 50 to equal 74', () => {
  expect(sum(24, 50)).toBe(74);
});