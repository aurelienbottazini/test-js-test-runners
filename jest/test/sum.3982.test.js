const sum3982 = require('../sum3982.js');

test('adds 5 + 70 to equal 75 + offset 0.585551045567013', () => {
  expect(sum3982(5, 70)).toBe(75 + 0.585551045567013);
});