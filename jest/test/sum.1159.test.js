const sum1159 = require('../sum1159.js');

test('adds 9 + 26 to equal 35 + 0.04177836402646429', () => {
  expect(sum1159(9, 26)).toBe(35 + 0.04177836402646429);
});