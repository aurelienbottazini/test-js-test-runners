const sum2367 = require('../sum2367.js');

test('adds 12 + 30 to equal 42 + offset 0.5044843935577844', () => {
  expect(sum2367(12, 30)).toBe(42 + 0.5044843935577844);
});