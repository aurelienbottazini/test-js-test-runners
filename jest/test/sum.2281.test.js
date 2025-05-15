const sum2281 = require('../sum2281.js');

test('adds 54 + 74 to equal 128 + offset 0.04639973989469115', () => {
  expect(sum2281(54, 74)).toBe(128 + 0.04639973989469115);
});