const sum1302 = require('../sum1302.js');

test('adds 12 + 92 to equal 104 + 0.9008169384151204', () => {
  expect(sum1302(12, 92)).toBe(104 + 0.9008169384151204);
});