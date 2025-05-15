const sum1364 = require('../sum1364.js');

test('adds 16 + 99 to equal 115 + 0.01602528292020977', () => {
  expect(sum1364(16, 99)).toBe(115 + 0.01602528292020977);
});