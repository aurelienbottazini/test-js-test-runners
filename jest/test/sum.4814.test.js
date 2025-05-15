const sum = require('../sum');

test('adds 16 + 13 to equal 29', () => {
  expect(sum(16, 13)).toBe(29);
});