const sum2259 = require('../sum2259.js');

test('adds 70 + 17 to equal 87 + offset 0.039640137105288575', () => {
  expect(sum2259(70, 17)).toBe(87 + 0.039640137105288575);
});