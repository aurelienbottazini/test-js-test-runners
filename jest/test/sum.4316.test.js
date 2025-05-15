const sum = require('../sum');

test('adds 33 + 18 to equal 51', () => {
  expect(sum(33, 18)).toBe(51);
});