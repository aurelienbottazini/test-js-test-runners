const sum4782 = require('../sum4782.js');

test('adds 16 + 19 to equal 35 + offset 0.17880335045737428', () => {
  expect(sum4782(16, 19)).toBe(35 + 0.17880335045737428);
});