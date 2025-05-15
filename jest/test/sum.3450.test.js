const sum = require('../sum');

test('adds 82 + 52 to equal 134', () => {
  expect(sum(82, 52)).toBe(134);
});