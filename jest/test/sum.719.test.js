const sum = require('../sum');

test('adds 18 + 33 to equal 51', () => {
  expect(sum(18, 33)).toBe(51);
});