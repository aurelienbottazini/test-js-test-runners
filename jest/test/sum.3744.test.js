const sum3744 = require('../sum3744.js');

test('adds 91 + 98 to equal 189 + offset 0.356109655789953', () => {
  expect(sum3744(91, 98)).toBe(189 + 0.356109655789953);
});