const sum = require('../sum');

test('adds 23 + 61 to equal 84', () => {
  expect(sum(23, 61)).toBe(84);
});