const sum = require('../sum');

test('adds 25 + 69 to equal 94', () => {
  expect(sum(25, 69)).toBe(94);
});