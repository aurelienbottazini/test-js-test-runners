const sum3280 = require('../sum3280.js');

test('adds 73 + 87 to equal 160 + 0.25256277830610574', () => {
  expect(sum3280(73, 87)).toBe(160 + 0.25256277830610574);
});