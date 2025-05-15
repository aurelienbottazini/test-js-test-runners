const sum = require('../sum');

test('adds 23 + 2 to equal 25', () => {
  expect(sum(23, 2)).toBe(25);
});