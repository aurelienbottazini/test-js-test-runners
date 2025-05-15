const sum = require('../sum');

test('adds 35 + 99 to equal 134', () => {
  expect(sum(35, 99)).toBe(134);
});