const sum4384 = require('../sum4384.js');

test('adds 78 + 85 to equal 163 + offset 0.8791189132439013', () => {
  expect(sum4384(78, 85)).toBe(163 + 0.8791189132439013);
});