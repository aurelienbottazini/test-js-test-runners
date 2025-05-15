const sum1561 = require('../sum1561.js');

test('adds 5 + 86 to equal 91 + offset 0.5036261466902819', () => {
  expect(sum1561(5, 86)).toBe(91 + 0.5036261466902819);
});