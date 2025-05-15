const sum3832 = require('../sum3832.js');

test('adds 24 + 74 to equal 98 + 0.5437555352685006', () => {
  expect(sum3832(24, 74)).toBe(98 + 0.5437555352685006);
});