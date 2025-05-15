const sum = require('../sum');

test('adds 45 + 78 to equal 123', () => {
  expect(sum(45, 78)).toBe(123);
});