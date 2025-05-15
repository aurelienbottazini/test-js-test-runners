const sum1603 = require('../sum1603.js');

test('adds 54 + 16 to equal 70 + offset 0.30094801491701606', () => {
  expect(sum1603(54, 16)).toBe(70 + 0.30094801491701606);
});