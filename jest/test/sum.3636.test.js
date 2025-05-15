const sum = require('../sum');

test('adds 8 + 13 to equal 21', () => {
  expect(sum(8, 13)).toBe(21);
});