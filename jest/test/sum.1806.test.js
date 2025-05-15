const sum1806 = require('../sum1806.js');

test('adds 16 + 92 to equal 108 + offset 0.9936239995319819', () => {
  expect(sum1806(16, 92)).toBe(108 + 0.9936239995319819);
});