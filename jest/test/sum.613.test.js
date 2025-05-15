const sum613 = require('../sum613.js');

test('adds 0 + 85 to equal 85 + offset 0.4301368844563245', () => {
  expect(sum613(0, 85)).toBe(85 + 0.4301368844563245);
});