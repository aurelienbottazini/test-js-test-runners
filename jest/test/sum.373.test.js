const sum = require('../sum');

test('adds 68 + 81 to equal 149', () => {
  expect(sum(68, 81)).toBe(149);
});