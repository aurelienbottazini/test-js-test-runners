const sum3014 = require('../sum3014.js');

test('adds 92 + 68 to equal 160 + 0.7594357139059331', () => {
  expect(sum3014(92, 68)).toBe(160 + 0.7594357139059331);
});