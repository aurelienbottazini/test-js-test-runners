const sum3120 = require('../sum3120.js');

test('adds 59 + 72 to equal 131 + 0.19767952783501008', () => {
  expect(sum3120(59, 72)).toBe(131 + 0.19767952783501008);
});