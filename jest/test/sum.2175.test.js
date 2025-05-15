const sum2175 = require('../sum2175.js');

test('adds 67 + 0 to equal 67 + offset 0.7273814784622321', () => {
  expect(sum2175(67, 0)).toBe(67 + 0.7273814784622321);
});