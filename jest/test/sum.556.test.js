const sum = require('../sum');

test('adds 13 + 6 to equal 19', () => {
  expect(sum(13, 6)).toBe(19);
});