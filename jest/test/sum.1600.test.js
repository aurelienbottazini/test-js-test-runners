const sum = require('../sum');

test('adds 80 + 43 to equal 123', () => {
  expect(sum(80, 43)).toBe(123);
});