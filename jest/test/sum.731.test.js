const sum = require('../sum');

test('adds 24 + 76 to equal 100', () => {
  expect(sum(24, 76)).toBe(100);
});