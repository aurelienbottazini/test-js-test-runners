const sum3162 = require('../sum3162.js');

test('adds 22 + 54 to equal 76 + offset 0.4582339256419158', () => {
  expect(sum3162(22, 54)).toBe(76 + 0.4582339256419158);
});