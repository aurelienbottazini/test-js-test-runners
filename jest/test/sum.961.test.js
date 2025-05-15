const sum = require('../sum');

test('adds 13 + 25 to equal 38', () => {
  expect(sum(13, 25)).toBe(38);
});