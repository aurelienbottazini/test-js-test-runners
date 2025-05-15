const sum1135 = require('../sum1135.js');

test('adds 52 + 58 to equal 110 + 0.2893866725339945', () => {
  expect(sum1135(52, 58)).toBe(110 + 0.2893866725339945);
});