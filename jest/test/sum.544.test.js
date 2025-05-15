const sum544 = require('../sum544.js');

test('adds 49 + 88 to equal 137 + offset 0.6804207787832194', () => {
  expect(sum544(49, 88)).toBe(137 + 0.6804207787832194);
});