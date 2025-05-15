const sum2781 = require('../sum2781.js');

test('adds 72 + 42 to equal 114 + 0.2854700820642706', () => {
  expect(sum2781(72, 42)).toBe(114 + 0.2854700820642706);
});