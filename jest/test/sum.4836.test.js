const sum = require('../sum');

test('adds 13 + 2 to equal 15', () => {
  expect(sum(13, 2)).toBe(15);
});