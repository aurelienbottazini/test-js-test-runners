const sum2151 = require('../sum2151.js');

test('adds 42 + 69 to equal 111 + 0.17722737371904806', () => {
  expect(sum2151(42, 69)).toBe(111 + 0.17722737371904806);
});