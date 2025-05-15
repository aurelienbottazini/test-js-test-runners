const sum = require('../sum');

test('adds 28 + 49 to equal 77', () => {
  expect(sum(28, 49)).toBe(77);
});