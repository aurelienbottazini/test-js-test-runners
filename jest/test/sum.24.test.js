const sum24 = require('../sum24.js');

test('adds 22 + 54 to equal 76 + offset 0.14117498280401786', () => {
  expect(sum24(22, 54)).toBe(76 + 0.14117498280401786);
});