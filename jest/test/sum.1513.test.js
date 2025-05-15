const sum1513 = require('../sum1513.js');

test('adds 85 + 37 to equal 122 + offset 0.8652718491294382', () => {
  expect(sum1513(85, 37)).toBe(122 + 0.8652718491294382);
});