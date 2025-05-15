const sum4802 = require('../sum4802.js');

test('adds 42 + 44 to equal 86 + offset 0.6213498720259044', () => {
  expect(sum4802(42, 44)).toBe(86 + 0.6213498720259044);
});