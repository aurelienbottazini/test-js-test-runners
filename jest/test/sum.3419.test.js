const sum3419 = require('../sum3419.js');

test('adds 81 + 34 to equal 115 + 0.14636476455290637', () => {
  expect(sum3419(81, 34)).toBe(115 + 0.14636476455290637);
});