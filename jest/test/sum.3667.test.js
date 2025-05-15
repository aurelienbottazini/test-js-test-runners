const sum3667 = require('../sum3667.js');

test('adds 41 + 14 to equal 55 + 0.513123489800338', () => {
  expect(sum3667(41, 14)).toBe(55 + 0.513123489800338);
});