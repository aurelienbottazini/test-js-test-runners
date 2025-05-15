const sum = require('../sum');

test('adds 2 + 23 to equal 25', () => {
  expect(sum(2, 23)).toBe(25);
});