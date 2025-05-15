const sum4139 = require('../sum4139.js');

test('adds 81 + 63 to equal 144 + 0.036909517794998514', () => {
  expect(sum4139(81, 63)).toBe(144 + 0.036909517794998514);
});