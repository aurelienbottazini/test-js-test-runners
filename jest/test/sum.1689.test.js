const sum1689 = require('../sum1689.js');

test('adds 15 + 95 to equal 110 + 0.060592868889863816', () => {
  expect(sum1689(15, 95)).toBe(110 + 0.060592868889863816);
});