const sum3228 = require('../sum3228.js');

test('adds 64 + 77 to equal 141 + offset 0.4191106599139305', () => {
  expect(sum3228(64, 77)).toBe(141 + 0.4191106599139305);
});