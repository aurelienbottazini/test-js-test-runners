const sum = require('../sum');

test('adds 5 + 36 to equal 41', () => {
  expect(sum(5, 36)).toBe(41);
});