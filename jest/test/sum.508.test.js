const sum = require('../sum');

test('adds 8 + 82 to equal 90', () => {
  expect(sum(8, 82)).toBe(90);
});