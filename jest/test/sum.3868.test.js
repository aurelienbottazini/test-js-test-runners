const sum3868 = require('../sum3868.js');

test('adds 55 + 87 to equal 142 + offset 0.37511575834852484', () => {
  expect(sum3868(55, 87)).toBe(142 + 0.37511575834852484);
});