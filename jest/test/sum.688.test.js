const sum688 = require('../sum688.js');

test('adds 49 + 20 to equal 69 + 0.21298676635806835', () => {
  expect(sum688(49, 20)).toBe(69 + 0.21298676635806835);
});