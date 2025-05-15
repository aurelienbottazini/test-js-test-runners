const sum3812 = require('../sum3812.js');

test('adds 38 + 43 to equal 81 + 0.6292000620009909', () => {
  expect(sum3812(38, 43)).toBe(81 + 0.6292000620009909);
});