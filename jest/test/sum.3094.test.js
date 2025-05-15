const sum3094 = require('../sum3094.js');

test('adds 48 + 22 to equal 70 + offset 0.55004367897485', () => {
  expect(sum3094(48, 22)).toBe(70 + 0.55004367897485);
});