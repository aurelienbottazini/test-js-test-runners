const sum4352 = require('../sum4352.js');

test('adds 21 + 38 to equal 59 + offset 0.5215153473959301', () => {
  expect(sum4352(21, 38)).toBe(59 + 0.5215153473959301);
});