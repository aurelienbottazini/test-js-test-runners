const sum1192 = require('../sum1192.js');

test('adds 84 + 48 to equal 132 + offset 0.5153674072721215', () => {
  expect(sum1192(84, 48)).toBe(132 + 0.5153674072721215);
});