const sum1238 = require('../sum1238.js');

test('adds 61 + 61 to equal 122 + offset 0.7174271009321425', () => {
  expect(sum1238(61, 61)).toBe(122 + 0.7174271009321425);
});