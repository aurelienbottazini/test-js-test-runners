const sum = require('../sum');

test('adds 59 + 94 to equal 153', () => {
  expect(sum(59, 94)).toBe(153);
});