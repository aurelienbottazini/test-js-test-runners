const sum = require('../sum');

test('adds 48 + 86 to equal 134', () => {
  expect(sum(48, 86)).toBe(134);
});