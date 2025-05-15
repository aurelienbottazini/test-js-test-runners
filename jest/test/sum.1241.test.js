const sum = require('../sum');

test('adds 6 + 7 to equal 13', () => {
  expect(sum(6, 7)).toBe(13);
});