const sum = require('../sum');

test('adds 12 + 0 to equal 12', () => {
  expect(sum(12, 0)).toBe(12);
});