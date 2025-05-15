const sum3711 = require('../sum3711.js');

test('adds 91 + 59 to equal 150 + 0.020009453414224', () => {
  expect(sum3711(91, 59)).toBe(150 + 0.020009453414224);
});