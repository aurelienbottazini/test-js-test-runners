const sum15 = require('../sum15.js');

test('adds 8 + 21 to equal 29 + offset 0.09930494208528706', () => {
  expect(sum15(8, 21)).toBe(29 + 0.09930494208528706);
});