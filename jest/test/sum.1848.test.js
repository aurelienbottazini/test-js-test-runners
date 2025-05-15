const sum = require('../sum');

test('adds 95 + 28 to equal 123', () => {
  expect(sum(95, 28)).toBe(123);
});