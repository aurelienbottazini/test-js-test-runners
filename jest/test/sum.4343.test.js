const sum = require('../sum');

test('adds 59 + 75 to equal 134', () => {
  expect(sum(59, 75)).toBe(134);
});