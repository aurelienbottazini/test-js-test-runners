const sum = require('../sum');

test('adds 39 + 61 to equal 100', () => {
  expect(sum(39, 61)).toBe(100);
});