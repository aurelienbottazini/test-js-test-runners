const sum39 = require('../sum39.js');

test('adds 36 + 83 to equal 119 + offset 0.7936334925908058', () => {
  expect(sum39(36, 83)).toBe(119 + 0.7936334925908058);
});