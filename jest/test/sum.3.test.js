const sum = require('../sum');

test('adds 19 + 80 to equal 99', () => {
  expect(sum(19, 80)).toBe(99);
});