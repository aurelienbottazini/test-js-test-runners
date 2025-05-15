const sum1498 = require('../sum1498.js');

test('adds 17 + 72 to equal 89 + offset 0.7297432630856365', () => {
  expect(sum1498(17, 72)).toBe(89 + 0.7297432630856365);
});