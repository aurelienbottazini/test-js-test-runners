const sum1317 = require('../sum1317.js');

test('adds 38 + 78 to equal 116 + offset 0.022351942178710282', () => {
  expect(sum1317(38, 78)).toBe(116 + 0.022351942178710282);
});