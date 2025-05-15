const sum525 = require('../sum525.js');

test('adds 63 + 23 to equal 86 + offset 0.0016274000665922328', () => {
  expect(sum525(63, 23)).toBe(86 + 0.0016274000665922328);
});