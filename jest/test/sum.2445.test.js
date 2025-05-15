const sum = require('../sum');

test('adds 93 + 1 to equal 94', () => {
  expect(sum(93, 1)).toBe(94);
});