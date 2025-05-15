const sum = require('../sum');

test('adds 5 + 4 to equal 9', () => {
  expect(sum(5, 4)).toBe(9);
});