const sum3604 = require('../sum3604.js');

test('adds 18 + 36 to equal 54 + offset 0.1048839636837744', () => {
  expect(sum3604(18, 36)).toBe(54 + 0.1048839636837744);
});