const sum1691 = require('../sum1691.js');

test('adds 72 + 78 to equal 150 + 0.42932511852650346', () => {
  expect(sum1691(72, 78)).toBe(150 + 0.42932511852650346);
});