const sum = require('../sum');

test('adds 4 + 17 to equal 21', () => {
  expect(sum(4, 17)).toBe(21);
});