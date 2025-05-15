const sum = require('../sum');

test('adds 50 + 36 to equal 86', () => {
  expect(sum(50, 36)).toBe(86);
});