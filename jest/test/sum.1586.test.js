const sum1586 = require('../sum1586.js');

test('adds 96 + 37 to equal 133 + 0.738475096673892', () => {
  expect(sum1586(96, 37)).toBe(133 + 0.738475096673892);
});