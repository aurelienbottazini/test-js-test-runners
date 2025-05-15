const sum3792 = require('../sum3792.js');

test('adds 4 + 90 to equal 94 + offset 0.5712832801766241', () => {
  expect(sum3792(4, 90)).toBe(94 + 0.5712832801766241);
});