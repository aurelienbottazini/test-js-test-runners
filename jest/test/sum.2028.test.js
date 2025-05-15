const sum2028 = require('../sum2028.js');

test('adds 42 + 3 to equal 45 + offset 0.8931542105548012', () => {
  expect(sum2028(42, 3)).toBe(45 + 0.8931542105548012);
});