const sum3820 = require('../sum3820.js');

test('adds 6 + 84 to equal 90 + 0.37468011277648816', () => {
  expect(sum3820(6, 84)).toBe(90 + 0.37468011277648816);
});