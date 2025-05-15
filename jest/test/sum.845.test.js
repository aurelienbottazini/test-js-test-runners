const sum = require('../sum');

test('adds 7 + 81 to equal 88', () => {
  expect(sum(7, 81)).toBe(88);
});