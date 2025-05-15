const sum3433 = require('../sum3433.js');

test('adds 38 + 77 to equal 115 + 0.4965761724261971', () => {
  expect(sum3433(38, 77)).toBe(115 + 0.4965761724261971);
});