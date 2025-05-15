const sum4131 = require('../sum4131.js');

test('adds 38 + 18 to equal 56 + 0.6341893596149732', () => {
  expect(sum4131(38, 18)).toBe(56 + 0.6341893596149732);
});