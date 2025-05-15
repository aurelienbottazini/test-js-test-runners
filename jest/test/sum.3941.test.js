const sum3941 = require('../sum3941.js');

test('adds 50 + 18 to equal 68 + offset 0.7857263572005581', () => {
  expect(sum3941(50, 18)).toBe(68 + 0.7857263572005581);
});