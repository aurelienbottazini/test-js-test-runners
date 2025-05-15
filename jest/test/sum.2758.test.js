const sum2758 = require('../sum2758.js');

test('adds 85 + 85 to equal 170 + offset 0.734150615115748', () => {
  expect(sum2758(85, 85)).toBe(170 + 0.734150615115748);
});