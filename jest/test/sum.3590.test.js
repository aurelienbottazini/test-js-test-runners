const sum = require('../sum');

test('adds 1 + 36 to equal 37', () => {
  expect(sum(1, 36)).toBe(37);
});