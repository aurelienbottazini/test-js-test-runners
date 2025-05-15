const sum851 = require('../sum851.js');

test('adds 76 + 12 to equal 88 + offset 0.3677662288000205', () => {
  expect(sum851(76, 12)).toBe(88 + 0.3677662288000205);
});