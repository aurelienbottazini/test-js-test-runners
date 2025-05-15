const sum = require('../sum');

test('adds 88 + 6 to equal 94', () => {
  expect(sum(88, 6)).toBe(94);
});