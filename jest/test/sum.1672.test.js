const sum = require('../sum');

test('adds 87 + 81 to equal 168', () => {
  expect(sum(87, 81)).toBe(168);
});