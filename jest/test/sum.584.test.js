const sum584 = require('../sum584.js');

test('adds 16 + 75 to equal 91 + 0.20496998711324355', () => {
  expect(sum584(16, 75)).toBe(91 + 0.20496998711324355);
});