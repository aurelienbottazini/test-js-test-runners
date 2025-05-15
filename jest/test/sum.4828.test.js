const sum = require('../sum');

test('adds 33 + 2 to equal 35', () => {
  expect(sum(33, 2)).toBe(35);
});