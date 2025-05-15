const sum517 = require('../sum517.js');

test('adds 27 + 63 to equal 90 + 0.28925331646818', () => {
  expect(sum517(27, 63)).toBe(90 + 0.28925331646818);
});