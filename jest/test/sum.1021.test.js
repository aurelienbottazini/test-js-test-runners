const sum1021 = require('../sum1021.js');

test('adds 37 + 69 to equal 106 + 0.5535417035283017', () => {
  expect(sum1021(37, 69)).toBe(106 + 0.5535417035283017);
});