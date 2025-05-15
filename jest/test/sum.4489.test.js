const sum4489 = require('../sum4489.js');

test('adds 32 + 27 to equal 59 + offset 0.45515696946315853', () => {
  expect(sum4489(32, 27)).toBe(59 + 0.45515696946315853);
});