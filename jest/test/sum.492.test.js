const sum492 = require('../sum492.js');

test('adds 15 + 77 to equal 92 + offset 0.8149302296179561', () => {
  expect(sum492(15, 77)).toBe(92 + 0.8149302296179561);
});