const sum3511 = require('../sum3511.js');

test('adds 21 + 85 to equal 106 + offset 0.13626597048458944', () => {
  expect(sum3511(21, 85)).toBe(106 + 0.13626597048458944);
});