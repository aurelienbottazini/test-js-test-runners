const sum3212 = require('../sum3212.js');

test('adds 62 + 92 to equal 154 + offset 0.2964351180093231', () => {
  expect(sum3212(62, 92)).toBe(154 + 0.2964351180093231);
});