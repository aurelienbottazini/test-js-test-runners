const sum = require('../sum');

test('adds 7 + 22 to equal 29', () => {
  expect(sum(7, 22)).toBe(29);
});