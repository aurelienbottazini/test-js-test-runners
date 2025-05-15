const sum = require('../sum');

test('adds 15 + 79 to equal 94', () => {
  expect(sum(15, 79)).toBe(94);
});