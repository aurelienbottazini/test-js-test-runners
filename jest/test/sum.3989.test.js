const sum3989 = require('../sum3989.js');

test('adds 0 + 20 to equal 20 + 0.954536317330254', () => {
  expect(sum3989(0, 20)).toBe(20 + 0.954536317330254);
});