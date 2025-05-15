const sum = require('../sum');

test('adds 33 + 90 to equal 123', () => {
  expect(sum(33, 90)).toBe(123);
});