const sum = require('../sum');

test('adds 95 + 39 to equal 134', () => {
  expect(sum(95, 39)).toBe(134);
});