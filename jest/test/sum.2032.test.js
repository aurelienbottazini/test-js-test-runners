const sum2032 = require('../sum2032.js');

test('adds 7 + 90 to equal 97 + 0.7430259340155251', () => {
  expect(sum2032(7, 90)).toBe(97 + 0.7430259340155251);
});