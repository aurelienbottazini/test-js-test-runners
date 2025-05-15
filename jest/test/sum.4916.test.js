const sum = require('../sum');

test('adds 82 + 34 to equal 116', () => {
  expect(sum(82, 34)).toBe(116);
});