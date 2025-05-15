const sum = require('../sum');

test('adds 6 + 61 to equal 67', () => {
  expect(sum(6, 61)).toBe(67);
});