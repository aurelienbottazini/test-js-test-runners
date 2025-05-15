const sum = require('../sum');

test('adds 99 + 36 to equal 135', () => {
  expect(sum(99, 36)).toBe(135);
});