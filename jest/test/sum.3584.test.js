const sum3584 = require('../sum3584.js');

test('adds 75 + 68 to equal 143 + offset 0.6308612591676127', () => {
  expect(sum3584(75, 68)).toBe(143 + 0.6308612591676127);
});