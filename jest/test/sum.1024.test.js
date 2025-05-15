const sum1024 = require('../sum1024.js');

test('adds 23 + 19 to equal 42 + 0.27848712091437555', () => {
  expect(sum1024(23, 19)).toBe(42 + 0.27848712091437555);
});