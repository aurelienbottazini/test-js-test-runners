const sum4707 = require('../sum4707.js');

test('adds 51 + 91 to equal 142 + 0.039973663944721016', () => {
  expect(sum4707(51, 91)).toBe(142 + 0.039973663944721016);
});