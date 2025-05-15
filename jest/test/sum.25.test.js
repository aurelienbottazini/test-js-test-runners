const sum25 = require('../sum25.js');

test('adds 53 + 84 to equal 137 + 0.17423623667763222', () => {
  expect(sum25(53, 84)).toBe(137 + 0.17423623667763222);
});