const sum3294 = require('../sum3294.js');

test('adds 90 + 46 to equal 136 + offset 0.14286490730913115', () => {
  expect(sum3294(90, 46)).toBe(136 + 0.14286490730913115);
});