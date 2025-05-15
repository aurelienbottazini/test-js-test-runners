const sum3885 = require('../sum3885.js');

test('adds 29 + 67 to equal 96 + offset 0.9933648223129637', () => {
  expect(sum3885(29, 67)).toBe(96 + 0.9933648223129637);
});