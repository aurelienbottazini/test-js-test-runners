const sum = require('../sum');

test('adds 55 + 39 to equal 94', () => {
  expect(sum(55, 39)).toBe(94);
});