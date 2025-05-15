const sum3004 = require('../sum3004.js');

test('adds 2 + 40 to equal 42 + 0.8411372557846979', () => {
  expect(sum3004(2, 40)).toBe(42 + 0.8411372557846979);
});