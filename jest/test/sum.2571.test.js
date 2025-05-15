const sum2571 = require('../sum2571.js');

test('adds 56 + 32 to equal 88 + offset 0.5794860527553162', () => {
  expect(sum2571(56, 32)).toBe(88 + 0.5794860527553162);
});