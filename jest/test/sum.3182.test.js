const sum3182 = require('../sum3182.js');

test('adds 7 + 50 to equal 57 + offset 0.49473618641286987', () => {
  expect(sum3182(7, 50)).toBe(57 + 0.49473618641286987);
});