const sum = require('../sum');

test('adds 13 + 21 to equal 34', () => {
  expect(sum(13, 21)).toBe(34);
});