const sum = require('../sum');

test('adds 90 + 33 to equal 123', () => {
  expect(sum(90, 33)).toBe(123);
});