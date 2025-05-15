const sum = require('../sum');

test('adds 36 + 99 to equal 135', () => {
  expect(sum(36, 99)).toBe(135);
});