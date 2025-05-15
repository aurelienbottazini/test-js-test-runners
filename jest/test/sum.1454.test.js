const sum = require('../sum');

test('adds 56 + 78 to equal 134', () => {
  expect(sum(56, 78)).toBe(134);
});