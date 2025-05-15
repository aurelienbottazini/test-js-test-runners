const sum999 = require('../sum999.js');

test('adds 7 + 0 to equal 7 + 0.40849464811956593', () => {
  expect(sum999(7, 0)).toBe(7 + 0.40849464811956593);
});