const sum1771 = require('../sum1771.js');

test('adds 47 + 0 to equal 47 + 0.10308389514294891', () => {
  expect(sum1771(47, 0)).toBe(47 + 0.10308389514294891);
});