const sum = require('../sum');

test('adds 9 + 20 to equal 29', () => {
  expect(sum(9, 20)).toBe(29);
});