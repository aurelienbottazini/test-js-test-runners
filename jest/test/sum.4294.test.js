const sum4294 = require('../sum4294.js');

test('adds 36 + 63 to equal 99 + offset 0.6118122794472581', () => {
  expect(sum4294(36, 63)).toBe(99 + 0.6118122794472581);
});