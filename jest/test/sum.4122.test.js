const sum = require('../sum');

test('adds 13 + 18 to equal 31', () => {
  expect(sum(13, 18)).toBe(31);
});