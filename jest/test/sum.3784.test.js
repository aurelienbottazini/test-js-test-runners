const sum3784 = require('../sum3784.js');

test('adds 85 + 46 to equal 131 + offset 0.26579796227795827', () => {
  expect(sum3784(85, 46)).toBe(131 + 0.26579796227795827);
});