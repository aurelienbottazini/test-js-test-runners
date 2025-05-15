const sum4832 = require('../sum4832.js');

test('adds 45 + 90 to equal 135 + 0.8487114062663907', () => {
  expect(sum4832(45, 90)).toBe(135 + 0.8487114062663907);
});