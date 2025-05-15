const sum = require('../sum');

test('adds 12 + 10 to equal 22', () => {
  expect(sum(12, 10)).toBe(22);
});