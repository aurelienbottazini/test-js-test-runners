const sum2507 = require('../sum2507.js');

test('adds 44 + 34 to equal 78 + 0.16563141349573673', () => {
  expect(sum2507(44, 34)).toBe(78 + 0.16563141349573673);
});