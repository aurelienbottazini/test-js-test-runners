const sum = require('../sum');

test('adds 52 + 82 to equal 134', () => {
  expect(sum(52, 82)).toBe(134);
});