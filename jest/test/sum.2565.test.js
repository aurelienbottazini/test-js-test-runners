const sum2565 = require('../sum2565.js');

test('adds 69 + 3 to equal 72 + 0.9848833405813178', () => {
  expect(sum2565(69, 3)).toBe(72 + 0.9848833405813178);
});