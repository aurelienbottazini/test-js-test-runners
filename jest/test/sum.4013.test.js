const sum4013 = require('../sum4013.js');

test('adds 72 + 63 to equal 135 + offset 0.9679928940187977', () => {
  expect(sum4013(72, 63)).toBe(135 + 0.9679928940187977);
});