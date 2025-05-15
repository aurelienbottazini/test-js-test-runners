const sum1692 = require('../sum1692.js');

test('adds 24 + 14 to equal 38 + offset 0.5023895025739173', () => {
  expect(sum1692(24, 14)).toBe(38 + 0.5023895025739173);
});