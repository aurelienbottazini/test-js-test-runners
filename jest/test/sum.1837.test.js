const sum1837 = require('../sum1837.js');

test('adds 20 + 23 to equal 43 + offset 0.10571802673982966', () => {
  expect(sum1837(20, 23)).toBe(43 + 0.10571802673982966);
});