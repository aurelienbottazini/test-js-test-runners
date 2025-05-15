const sum = require('../sum');

test('adds 4 + 55 to equal 59', () => {
  expect(sum(4, 55)).toBe(59);
});