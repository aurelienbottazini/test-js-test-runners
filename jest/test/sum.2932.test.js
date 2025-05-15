const sum2932 = require('../sum2932.js');

test('adds 20 + 64 to equal 84 + 0.16631826661801652', () => {
  expect(sum2932(20, 64)).toBe(84 + 0.16631826661801652);
});