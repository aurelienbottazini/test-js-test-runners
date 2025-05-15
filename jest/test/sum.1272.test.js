const sum1272 = require('../sum1272.js');

test('adds 78 + 44 to equal 122 + offset 0.9347980437084914', () => {
  expect(sum1272(78, 44)).toBe(122 + 0.9347980437084914);
});