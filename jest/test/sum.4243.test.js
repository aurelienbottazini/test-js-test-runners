const sum4243 = require('../sum4243.js');

test('adds 53 + 67 to equal 120 + 0.46467343891381885', () => {
  expect(sum4243(53, 67)).toBe(120 + 0.46467343891381885);
});