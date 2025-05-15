const sum = require('../sum');

test('adds 91 + 3 to equal 94', () => {
  expect(sum(91, 3)).toBe(94);
});