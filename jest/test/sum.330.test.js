const sum330 = require('../sum330.js');

test('adds 20 + 92 to equal 112 + 0.06312141509247926', () => {
  expect(sum330(20, 92)).toBe(112 + 0.06312141509247926);
});