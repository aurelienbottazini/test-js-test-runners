const sum = require('../sum');

test('adds 59 + 27 to equal 86', () => {
  expect(sum(59, 27)).toBe(86);
});