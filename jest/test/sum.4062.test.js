const sum = require('../sum');

test('adds 78 + 62 to equal 140', () => {
  expect(sum(78, 62)).toBe(140);
});