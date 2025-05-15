const sum1489 = require('../sum1489.js');

test('adds 59 + 41 to equal 100 + 0.8332152568753214', () => {
  expect(sum1489(59, 41)).toBe(100 + 0.8332152568753214);
});