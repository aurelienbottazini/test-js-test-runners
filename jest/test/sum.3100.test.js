const sum3100 = require('../sum3100.js');

test('adds 17 + 90 to equal 107 + 0.012530659154573631', () => {
  expect(sum3100(17, 90)).toBe(107 + 0.012530659154573631);
});