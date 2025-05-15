const sum = require('../sum');

test('adds 50 + 84 to equal 134', () => {
  expect(sum(50, 84)).toBe(134);
});