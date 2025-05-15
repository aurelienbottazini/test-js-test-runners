const sum = require('../sum');

test('adds 16 + 99 to equal 115', () => {
  expect(sum(16, 99)).toBe(115);
});