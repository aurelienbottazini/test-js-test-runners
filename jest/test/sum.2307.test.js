const sum = require('../sum');

test('adds 4 + 95 to equal 99', () => {
  expect(sum(4, 95)).toBe(99);
});