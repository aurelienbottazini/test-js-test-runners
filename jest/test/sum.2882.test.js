const sum = require('../sum');

test('adds 63 + 60 to equal 123', () => {
  expect(sum(63, 60)).toBe(123);
});