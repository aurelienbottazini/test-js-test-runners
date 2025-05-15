const sum = require('../sum');

test('adds 54 + 40 to equal 94', () => {
  expect(sum(54, 40)).toBe(94);
});