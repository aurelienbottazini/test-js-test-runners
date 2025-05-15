const sum3475 = require('../sum3475.js');

test('adds 22 + 20 to equal 42 + 0.47630732809419574', () => {
  expect(sum3475(22, 20)).toBe(42 + 0.47630732809419574);
});