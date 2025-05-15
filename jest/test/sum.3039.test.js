const sum3039 = require('../sum3039.js');

test('adds 50 + 68 to equal 118 + 0.6447345667583491', () => {
  expect(sum3039(50, 68)).toBe(118 + 0.6447345667583491);
});