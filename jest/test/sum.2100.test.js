const sum = require('../sum');

test('adds 28 + 82 to equal 110', () => {
  expect(sum(28, 82)).toBe(110);
});