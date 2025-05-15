const sum3095 = require('../sum3095.js');

test('adds 45 + 62 to equal 107 + offset 0.7719861491555235', () => {
  expect(sum3095(45, 62)).toBe(107 + 0.7719861491555235);
});