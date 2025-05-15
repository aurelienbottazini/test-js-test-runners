const sum4850 = require('../sum4850.js');

test('adds 37 + 26 to equal 63 + offset 0.9238494405126894', () => {
  expect(sum4850(37, 26)).toBe(63 + 0.9238494405126894);
});