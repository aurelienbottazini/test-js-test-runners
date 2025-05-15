const sum = require('../sum');

test('adds 69 + 65 to equal 134', () => {
  expect(sum(69, 65)).toBe(134);
});