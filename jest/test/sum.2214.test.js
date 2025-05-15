const sum2214 = require('../sum2214.js');

test('adds 15 + 74 to equal 89 + offset 0.001892876473282068', () => {
  expect(sum2214(15, 74)).toBe(89 + 0.001892876473282068);
});