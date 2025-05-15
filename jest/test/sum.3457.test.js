const sum3457 = require('../sum3457.js');

test('adds 64 + 55 to equal 119 + 0.6261871503772138', () => {
  expect(sum3457(64, 55)).toBe(119 + 0.6261871503772138);
});