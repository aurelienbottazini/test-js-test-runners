const sum4532 = require('../sum4532.js');

test('adds 57 + 44 to equal 101 + 0.3036931374507398', () => {
  expect(sum4532(57, 44)).toBe(101 + 0.3036931374507398);
});