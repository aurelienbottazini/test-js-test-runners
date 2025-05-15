const sum470 = require('../sum470.js');

test('adds 89 + 92 to equal 181 + 0.43716399452244536', () => {
  expect(sum470(89, 92)).toBe(181 + 0.43716399452244536);
});