const sum = require('../sum');

test('adds 99 + 16 to equal 115', () => {
  expect(sum(99, 16)).toBe(115);
});