const sum2527 = require('../sum2527.js');

test('adds 79 + 43 to equal 122 + offset 0.2376356868267', () => {
  expect(sum2527(79, 43)).toBe(122 + 0.2376356868267);
});