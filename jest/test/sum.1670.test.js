const sum1670 = require('../sum1670.js');

test('adds 80 + 9 to equal 89 + 0.44124002991635025', () => {
  expect(sum1670(80, 9)).toBe(89 + 0.44124002991635025);
});