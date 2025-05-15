const sum = require('../sum');

test('adds 43 + 8 to equal 51', () => {
  expect(sum(43, 8)).toBe(51);
});