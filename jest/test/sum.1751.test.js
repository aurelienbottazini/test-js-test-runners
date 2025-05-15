const sum = require('../sum');

test('adds 88 + 35 to equal 123', () => {
  expect(sum(88, 35)).toBe(123);
});