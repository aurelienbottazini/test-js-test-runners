const sum4936 = require('../sum4936.js');

test('adds 62 + 55 to equal 117 + offset 0.7468699896109404', () => {
  expect(sum4936(62, 55)).toBe(117 + 0.7468699896109404);
});