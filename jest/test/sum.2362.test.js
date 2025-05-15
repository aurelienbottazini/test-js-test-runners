const sum = require('../sum');

test('adds 61 + 33 to equal 94', () => {
  expect(sum(61, 33)).toBe(94);
});