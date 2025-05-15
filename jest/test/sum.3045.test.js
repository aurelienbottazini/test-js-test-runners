const sum = require('../sum');

test('adds 4 + 36 to equal 40', () => {
  expect(sum(4, 36)).toBe(40);
});