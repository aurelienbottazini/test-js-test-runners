const sum = require('../sum');

test('adds 78 + 82 to equal 160', () => {
  expect(sum(78, 82)).toBe(160);
});