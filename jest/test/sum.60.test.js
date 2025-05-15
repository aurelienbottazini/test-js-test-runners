const sum = require('../sum');

test('adds 30 + 21 to equal 51', () => {
  expect(sum(30, 21)).toBe(51);
});