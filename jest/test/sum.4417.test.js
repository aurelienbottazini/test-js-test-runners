const sum = require('../sum');

test('adds 10 + 76 to equal 86', () => {
  expect(sum(10, 76)).toBe(86);
});