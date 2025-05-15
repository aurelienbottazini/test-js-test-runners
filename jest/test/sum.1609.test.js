const sum1609 = require('../sum1609.js');

test('adds 97 + 65 to equal 162 + 0.8704813196099972', () => {
  expect(sum1609(97, 65)).toBe(162 + 0.8704813196099972);
});