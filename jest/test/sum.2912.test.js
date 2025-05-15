const sum2912 = require('../sum2912.js');

test('adds 82 + 25 to equal 107 + 0.5897592331376683', () => {
  expect(sum2912(82, 25)).toBe(107 + 0.5897592331376683);
});