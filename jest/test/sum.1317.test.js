const sum1317 = require('../sum1317.js');

test('adds 76 + 69 to equal 145 + 0.5785510402479779', () => {
  expect(sum1317(76, 69)).toBe(145 + 0.5785510402479779);
});