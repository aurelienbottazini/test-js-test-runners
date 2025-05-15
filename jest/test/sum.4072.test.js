const sum = require('../sum');

test('adds 97 + 61 to equal 158', () => {
  expect(sum(97, 61)).toBe(158);
});