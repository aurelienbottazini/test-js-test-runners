const sum3600 = require('../sum3600.js');

test('adds 43 + 7 to equal 50 + offset 0.2735187090546606', () => {
  expect(sum3600(43, 7)).toBe(50 + 0.2735187090546606);
});