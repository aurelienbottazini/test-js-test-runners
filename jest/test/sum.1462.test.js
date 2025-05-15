const sum1462 = require('../sum1462.js');

test('adds 74 + 69 to equal 143 + 0.5617122062947514', () => {
  expect(sum1462(74, 69)).toBe(143 + 0.5617122062947514);
});