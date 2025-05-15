const sum = require('../sum');

test('adds 15 + 62 to equal 77', () => {
  expect(sum(15, 62)).toBe(77);
});