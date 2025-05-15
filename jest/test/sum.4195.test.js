const sum = require('../sum');

test('adds 70 + 13 to equal 83', () => {
  expect(sum(70, 13)).toBe(83);
});