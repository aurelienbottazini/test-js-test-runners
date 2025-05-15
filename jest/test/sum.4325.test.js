const sum = require('../sum');

test('adds 99 + 81 to equal 180', () => {
  expect(sum(99, 81)).toBe(180);
});