const sum1631 = require('../sum1631.js');

test('adds 43 + 46 to equal 89 + 0.0039073341784015', () => {
  expect(sum1631(43, 46)).toBe(89 + 0.0039073341784015);
});