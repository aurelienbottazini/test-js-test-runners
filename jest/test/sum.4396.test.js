const sum4396 = require('../sum4396.js');

test('adds 76 + 97 to equal 173 + 0.05230834661658257', () => {
  expect(sum4396(76, 97)).toBe(173 + 0.05230834661658257);
});