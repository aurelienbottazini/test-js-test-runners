const sum3417 = require('../sum3417.js');

test('adds 17 + 70 to equal 87 + 0.4133977845557629', () => {
  expect(sum3417(17, 70)).toBe(87 + 0.4133977845557629);
});