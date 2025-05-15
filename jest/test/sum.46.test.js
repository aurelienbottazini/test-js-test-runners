const sum46 = require('../sum46.js');

test('adds 18 + 58 to equal 76 + 0.5353539196966632', () => {
  expect(sum46(18, 58)).toBe(76 + 0.5353539196966632);
});