const sum2048 = require('../sum2048.js');

test('adds 94 + 76 to equal 170 + offset 0.297180590739478', () => {
  expect(sum2048(94, 76)).toBe(170 + 0.297180590739478);
});