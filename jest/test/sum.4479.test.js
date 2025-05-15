const sum4479 = require('../sum4479.js');

test('adds 18 + 99 to equal 117 + offset 0.13206362063994337', () => {
  expect(sum4479(18, 99)).toBe(117 + 0.13206362063994337);
});