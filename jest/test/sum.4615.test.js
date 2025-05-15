const sum4615 = require('../sum4615.js');

test('adds 67 + 63 to equal 130 + 0.06777586013329262', () => {
  expect(sum4615(67, 63)).toBe(130 + 0.06777586013329262);
});