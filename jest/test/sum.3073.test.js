const sum3073 = require('../sum3073.js');

test('adds 65 + 85 to equal 150 + offset 0.22309139896468433', () => {
  expect(sum3073(65, 85)).toBe(150 + 0.22309139896468433);
});