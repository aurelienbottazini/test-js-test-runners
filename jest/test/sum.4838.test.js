const sum = require('../sum');

test('adds 17 + 82 to equal 99', () => {
  expect(sum(17, 82)).toBe(99);
});