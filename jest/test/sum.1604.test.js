const sum1604 = require('../sum1604.js');

test('adds 29 + 0 to equal 29 + 0.15367167187419262', () => {
  expect(sum1604(29, 0)).toBe(29 + 0.15367167187419262);
});