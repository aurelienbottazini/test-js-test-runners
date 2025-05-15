const sum = require('../sum');

test('adds 89 + 64 to equal 153', () => {
  expect(sum(89, 64)).toBe(153);
});