const sum2341 = require('../sum2341.js');

test('adds 47 + 58 to equal 105 + 0.498791405784367', () => {
  expect(sum2341(47, 58)).toBe(105 + 0.498791405784367);
});