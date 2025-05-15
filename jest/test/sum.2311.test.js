const sum2311 = require('../sum2311.js');

test('adds 67 + 74 to equal 141 + offset 0.28023223043864887', () => {
  expect(sum2311(67, 74)).toBe(141 + 0.28023223043864887);
});