const sum1111 = require('../sum1111.js');

test('adds 99 + 18 to equal 117 + offset 0.7521441063358653', () => {
  expect(sum1111(99, 18)).toBe(117 + 0.7521441063358653);
});