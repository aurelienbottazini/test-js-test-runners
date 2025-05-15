const sum4375 = require('../sum4375.js');

test('adds 72 + 82 to equal 154 + offset 0.6961120203983936', () => {
  expect(sum4375(72, 82)).toBe(154 + 0.6961120203983936);
});