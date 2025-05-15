const sum = require('../sum');

test('adds 1 + 13 to equal 14', () => {
  expect(sum(1, 13)).toBe(14);
});