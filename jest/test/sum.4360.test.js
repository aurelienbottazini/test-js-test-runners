const sum4360 = require('../sum4360.js');

test('adds 90 + 94 to equal 184 + 0.4187311523686652', () => {
  expect(sum4360(90, 94)).toBe(184 + 0.4187311523686652);
});