const sum = require('../sum');

test('adds 49 + 74 to equal 123', () => {
  expect(sum(49, 74)).toBe(123);
});