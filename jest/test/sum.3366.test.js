const sum3366 = require('../sum3366.js');

test('adds 29 + 43 to equal 72 + offset 0.22079683597001487', () => {
  expect(sum3366(29, 43)).toBe(72 + 0.22079683597001487);
});