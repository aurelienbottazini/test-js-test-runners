const sum = require('../sum');

test('adds 9 + 79 to equal 88', () => {
  expect(sum(9, 79)).toBe(88);
});