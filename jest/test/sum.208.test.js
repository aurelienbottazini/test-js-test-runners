const sum = require('../sum');

test('adds 22 + 13 to equal 35', () => {
  expect(sum(22, 13)).toBe(35);
});