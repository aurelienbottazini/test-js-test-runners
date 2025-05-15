const sum1492 = require('../sum1492.js');

test('adds 79 + 15 to equal 94 + offset 0.3548091308434802', () => {
  expect(sum1492(79, 15)).toBe(94 + 0.3548091308434802);
});