const sum4223 = require('../sum4223.js');

test('adds 72 + 78 to equal 150 + 0.09333853747618504', () => {
  expect(sum4223(72, 78)).toBe(150 + 0.09333853747618504);
});