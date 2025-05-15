const sum4919 = require('../sum4919.js');

test('adds 63 + 74 to equal 137 + offset 0.5389283404415581', () => {
  expect(sum4919(63, 74)).toBe(137 + 0.5389283404415581);
});