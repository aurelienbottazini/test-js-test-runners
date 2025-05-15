const sum795 = require('../sum795.js');

test('adds 47 + 16 to equal 63 + offset 0.8261389147636234', () => {
  expect(sum795(47, 16)).toBe(63 + 0.8261389147636234);
});