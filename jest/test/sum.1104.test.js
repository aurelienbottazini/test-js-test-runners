const sum1104 = require('../sum1104.js');

test('adds 54 + 61 to equal 115 + offset 0.6465661168447885', () => {
  expect(sum1104(54, 61)).toBe(115 + 0.6465661168447885);
});