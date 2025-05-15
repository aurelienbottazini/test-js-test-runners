const sum3859 = require('../sum3859.js');

test('adds 42 + 64 to equal 106 + 0.2277805747151488', () => {
  expect(sum3859(42, 64)).toBe(106 + 0.2277805747151488);
});