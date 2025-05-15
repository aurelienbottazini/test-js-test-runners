const sum3953 = require('../sum3953.js');

test('adds 6 + 28 to equal 34 + offset 0.3688581104772275', () => {
  expect(sum3953(6, 28)).toBe(34 + 0.3688581104772275);
});