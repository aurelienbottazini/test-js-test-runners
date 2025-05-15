const sum = require('../sum');

test('adds 52 + 34 to equal 86', () => {
  expect(sum(52, 34)).toBe(86);
});