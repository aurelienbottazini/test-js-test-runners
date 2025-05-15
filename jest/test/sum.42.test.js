const sum42 = require('../sum42.js');

test('adds 96 + 71 to equal 167 + 0.28504122197726334', () => {
  expect(sum42(96, 71)).toBe(167 + 0.28504122197726334);
});