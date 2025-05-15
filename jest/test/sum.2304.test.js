const sum2304 = require('../sum2304.js');

test('adds 62 + 72 to equal 134 + offset 0.8991479583826005', () => {
  expect(sum2304(62, 72)).toBe(134 + 0.8991479583826005);
});