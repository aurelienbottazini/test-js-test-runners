const sum2214 = require('../sum2214.js');

test('adds 31 + 4 to equal 35 + 0.5919905664575983', () => {
  expect(sum2214(31, 4)).toBe(35 + 0.5919905664575983);
});