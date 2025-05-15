const sum = require('../sum');

test('adds 16 + 25 to equal 41', () => {
  expect(sum(16, 25)).toBe(41);
});