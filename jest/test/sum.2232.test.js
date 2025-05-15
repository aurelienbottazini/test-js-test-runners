const sum2232 = require('../sum2232.js');

test('adds 45 + 53 to equal 98 + offset 0.35595650990184313', () => {
  expect(sum2232(45, 53)).toBe(98 + 0.35595650990184313);
});