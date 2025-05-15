const sum = require('../sum');

test('adds 43 + 91 to equal 134', () => {
  expect(sum(43, 91)).toBe(134);
});