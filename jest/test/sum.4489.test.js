const sum = require('../sum');

test('adds 89 + 82 to equal 171', () => {
  expect(sum(89, 82)).toBe(171);
});