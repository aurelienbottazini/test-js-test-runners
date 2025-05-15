const sum652 = require('../sum652.js');

test('adds 59 + 94 to equal 153 + offset 0.1200091211390163', () => {
  expect(sum652(59, 94)).toBe(153 + 0.1200091211390163);
});