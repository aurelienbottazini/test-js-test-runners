const sum4597 = require('../sum4597.js');

test('adds 49 + 68 to equal 117 + 0.5714090315804347', () => {
  expect(sum4597(49, 68)).toBe(117 + 0.5714090315804347);
});