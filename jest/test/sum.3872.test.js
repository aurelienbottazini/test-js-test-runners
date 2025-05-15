const sum3872 = require('../sum3872.js');

test('adds 88 + 15 to equal 103 + offset 0.9583179055460633', () => {
  expect(sum3872(88, 15)).toBe(103 + 0.9583179055460633);
});