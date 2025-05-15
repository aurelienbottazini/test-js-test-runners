const sum1261 = require('../sum1261.js');

test('adds 4 + 75 to equal 79 + 0.6278427132076182', () => {
  expect(sum1261(4, 75)).toBe(79 + 0.6278427132076182);
});