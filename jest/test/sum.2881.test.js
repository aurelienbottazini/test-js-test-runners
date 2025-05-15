const sum2881 = require('../sum2881.js');

test('adds 97 + 60 to equal 157 + 0.6401076022203077', () => {
  expect(sum2881(97, 60)).toBe(157 + 0.6401076022203077);
});