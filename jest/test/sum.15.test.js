const sum = require('../sum');

test('adds 22 + 64 to equal 86', () => {
  expect(sum(22, 64)).toBe(86);
});