const sum4636 = require('../sum4636.js');

test('adds 88 + 55 to equal 143 + 0.11247282614379428', () => {
  expect(sum4636(88, 55)).toBe(143 + 0.11247282614379428);
});