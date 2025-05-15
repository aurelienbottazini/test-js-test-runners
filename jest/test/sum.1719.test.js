const sum1719 = require('../sum1719.js');

test('adds 19 + 1 to equal 20 + 0.20433628909373314', () => {
  expect(sum1719(19, 1)).toBe(20 + 0.20433628909373314);
});